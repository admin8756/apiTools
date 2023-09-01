import request from '../request';

/**
 * 版本信息 API 类
 * @property {Function} index - 检查版本更新
 * @module Version
 */
export default class Version {
  /**
   * @name 检查版本更新
   * @param {Object} params - 行参
   * @param {String} params.appId  - appID
   * @returns {Promise :Object} 返回值
   * @exports Version.index
   */

  static async index(params) {
    try {
      const { data } = await request.get('version/index', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Version - static: Index ', error);
      throw error;
    }
  }
}
