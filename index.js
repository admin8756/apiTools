const fs = require("fs");
const axios = require("axios");
const md5 = require("md5");
const path = require("path");

// 读取api.json文件中的数据
const apiData = require("./api.json");

// 将字符串转换为小驼峰命名
function toCamelCase(str) {
  return str.replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""));
}
// 文件名命名格式化
const fileNameFormat = (str) => {
  // 1. 小写字母
  str = str.toLowerCase();
  // 2. 单词之间用下划线连接
  str = str.replace(/\s+/g, "_");
  // 3. 不能有空格
  str = str.replace(/\s+/g, "");
  // 4. 不能有特殊字符
  str = str.replace(/[^\w\u4e00-\u9fa5]/g, "");
  // 5. 不能有中文
  str = str.replace(/[\u4e00-\u9fa5]/g, "");
  // 6. 不能以数字开头
  str = str.replace(/^\d+/, "");
  return str;
};
const translateTextHan = async (text) => {
  const url = `https://api.vvhan.com/api/fy?text=${text}`;
  const request = axios.create();
  request.defaults.headers.common["User-Agent"] =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36 Edg/112.0.1722.68";
  const response = await request.get(url);
  const result = response.data;
  console.log(result);
  const { data, success } = result;
  if (!success) {
    throw new Error("翻译失败");
  }
  return data.fanyi;
};

// 创建apis目录（如果不存在）

const apisDir = "./apis";
if (!fs.existsSync(apisDir)) {
  fs.mkdirSync(apisDir);
}
apiData.forEach(async (item) => {
  const categoryName = await translateTextHan(item.title || "Untitled");
  const categoryCamelName = toCamelCase(categoryName);

  // 收集所有 API 翻译操作的 Promise
  const apiPromises = item.apiActions.map(async (api_action) => {
    const actionTitle = api_action.title || "Untitled";
    const translatedActionTitle = await translateTextHan(actionTitle);
    const formattedTitle = toCamelCase(translatedActionTitle);

    return `
  /**
   * ${actionTitle}
   *
   * @param {Object} params - 请求参数
   * @returns {Promise<any>}
   */
  static async ${formattedTitle}(params) {
    try {
      const response = await request.${
        api_action.requestType.includes("get") ? "get" : "post"
      }("${api_action.url.replace("/api/", "")}", params);
      return response.data;
    } catch (error) {
      console.error("Error fetching ${translatedActionTitle} data:", error);
      throw error;
    }
  }
`;
  });

  // 等待所有 API 翻译操作完成
  const apiCodes = await Promise.all(apiPromises);

  const categoryClassCode = `
// ${item.title} 
import request from "../request";

export class ${categoryCamelName} {
${apiCodes.join("\n")}
}
`;
  const categoryFilePath = path.join(
    apisDir,
    `${fileNameFormat(categoryName)}.js`
  );
  fs.writeFileSync(categoryFilePath, categoryClassCode);
});
