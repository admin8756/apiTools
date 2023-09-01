import request from '../request';

/**
 * 首页相关 API 类
 * @property {Function} index - 首页
 * @property {Function} search - 全局搜索
 * @module Home
 */
export default class Home {
  /**
   * @name 首页
   * @param {Object} params - 行参
   * @returns {Promise :Object} 返回值
   * @exports Home.index
   */

  static async index(params) {
    try {
      const { data } = await request.get('home/index', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Home - static: Index ', error);
      throw error;
    }
  }

  /**
   * @name 全局搜索
   * @param {Object} params - 行参
   * @param {String} params.keyword  - 关键词
   * @returns {Promise :Object} 返回值
   * @exports Home.search
   */

  static async search(params) {
    try {
      const { data } = await request.get('home/search', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Home - static: Search ', error);
      throw error;
    }
  }
}
