import request from '../request';

/**
 * 上传文件 API 类
 * @property {Function} fileUpload - 上传
 * @property {Function} getFileList - 获取文件列表
 * @property {Function} deleteFile - 删除文件
 * @module Upload
 */
export default class Upload {
  /**
   * @name 上传
   * @param {Object} params - 行参
   * @param {String} params.bizType 业务类型 (worksheet,model,prod)业务类型(worksheet,model,prod)
   * @param {String} params.bizId  - 业务ID
   * @param {String} params.file  - 文件
   * @returns {Promise :Object} 返回值
   * @exports Upload.fileUpload
   */

  static async fileUpload(params) {
    try {
      const { data } = await request.get('upload/fileUpload', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Upload - static: FileUpload ', error);
      throw error;
    }
  }

  /**
   * @name 获取文件列表
   * @param {Object} params - 行参
   * @param {String} [params.bizType] 业务类型 (worksheet业务类型(worksheet
   * @param {String} params.bizId  - 业务ID
   * @returns {Promise :Object} 返回值
   * @exports Upload.getFileList
   */

  static async getFileList(params) {
    try {
      const { data } = await request.get('upload/getFileList', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Upload - static: GetFileList ', error);
      throw error;
    }
  }

  /**
   * @name 删除文件
   * @param {Object} params - 行参
   * @param {String} [params.bizType] 业务类型 (worksheet业务类型(worksheet
   * @param {String} params.bizId  - 业务ID
   * @param {String} params.id  - 文件ID
   * @returns {Promise :Object} 返回值
   * @exports Upload.deleteFile
   */

  static async deleteFile(params) {
    try {
      const { data } = await request.get('upload/deleteFile', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Upload - static: DeleteFile ', error);
      throw error;
    }
  }
}
