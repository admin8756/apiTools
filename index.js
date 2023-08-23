const fs = require("fs");
const path = require("path");
const prettier = require("prettier");
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

// 函数的方法
const toCamelCaseLowerCase = (str) => {
  const camelCase = toCamelCase(str);
  return camelCase[0].toLowerCase() + camelCase.slice(1);
};

// 创建apis目录（如果不存在）

const apisDir = "./apis";
if (!fs.existsSync(apisDir)) {
  fs.mkdirSync(apisDir);
}
// 格式化参数
function formatReqParams(reqParams) {
  const getStr = (param) => {
    const typeOjb = {
      int: "Number",
      Long: "Number",
      BigDecimal: "Number",
      string: "String",
    };
    const pType = param.type;
    const type =
      (pType.includes("int") && typeOjb.int) ||
      (pType.includes("Long") && typeOjb.Long) ||
      (pType.includes("string") && typeOjb.string) ||
      (pType.includes("BigDecimal") && typeOjb.BigDecimal) ||
      "String";
    // 通过正则去除空格，删除包含int long string 的文字
    const desc = param.desc
      .replace(/\s/g, "")
      .replace(/(int|Long|string)/g, "");
    // 动态生成参数名
    const name =
      param.required === "必填"
        ? "params." + param.name
        : `[params.${param.name}]`;
    const descRes = param.desc == desc ? ` - ${param.desc}` : param.desc + desc;
    return `* @param {${type}} ${name} ${descRes} `;
  };
  const reqFast = "* @param {Object} params - 行参";
  if (!reqParams.length) {
    return reqFast;
  }
  return (
    reqFast +
    "\n" +
    reqParams
      .map((param) => {
        return `${getStr(param)}`;
      })
      .join("\n")
  );
}
// 生成方法注释
const methodComment = (arr) => {
  if(!arr.length) {
    return '*'
  }else{
    return arr.map(item => {
      return `* @property {Function} ${item.fun} - ${item.title}`
    }).join('\n')
  }
};
// 循环分类
apiData.forEach(async (item) => {
  const classArr = item.apiActions[0].url && item.apiActions[0].url.split("/");
  const className = classArr && classArr[classArr.length - 2];
  const categoryName = className[0].toUpperCase() + className.slice(1);
  const fileName = toCamelCase(className);
  const funList = []
  // 循环接口
  const apiPromises = item.apiActions.map(async (api_action) => {
    const actionTitle = api_action.title || "未定义";
    const funText = api_action.url.split("/");
    const funName = funText[funText.length - 1];
    const translatedActionTitle = funName[0].toUpperCase() + funName.slice(1);
    const formattedTitle = toCamelCase(translatedActionTitle);

    // 生成 参数 注释
    const jsDocComment = `
      /**
       * ${actionTitle}
      ${formatReqParams(api_action.reqParams)}
      * @returns {Promise<Object>} 返回一个 Promise
      * @exports ${categoryName}.${funName}
      */
    `;
    funList.push({
      title: actionTitle,
      fun: toCamelCaseLowerCase(formattedTitle),
    })
    // 生成方法代码
    const methodCode = `
      static async ${toCamelCaseLowerCase(formattedTitle)}(params) {
        try {
          const {data} = await request.${
            api_action.requestType.includes("get") ? "get" : "post"
          }("${api_action.url.replace("/api/", "")}", params);
          return data;
        } catch (error) {
          console.error("[API] Error: class: ${categoryName} - static: ${formattedTitle} ", error);
          throw error;
        }
      }
    `;

    // 将 JSDoc 注释和方法代码连接在一起
    return jsDocComment + methodCode;
  });

  // 等待所有 API 动作的 Promise 完成
  const apiMethodStrings = await Promise.all(apiPromises);

  // 生成类代码
  const categoryClassCode = `
  import request from "../request";
  
  /**
   * ${item.title} API 类
   ${methodComment(funList)}
   * @module ${categoryName}
   */
  export default class ${categoryName} {
  ${apiMethodStrings
    .map((methodString) => {
      return methodString
        .split("\n")
        .map((line) => `  ${line}`)
        .join("\n");
    })
    .join("\n\n")}
  }
  `;
  const formattedClassCode = await prettier.format(categoryClassCode, {
    parser: "babel",
    singleQuote: true,
    semi: true,
    trailingComma: "all",
  });
  // 写入类代码到文件
  const categoryFilePath = path.join(apisDir, `${fileNameFormat(fileName)}.js`);
  fs.writeFileSync(categoryFilePath, formattedClassCode);
});
