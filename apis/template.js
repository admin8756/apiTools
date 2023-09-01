import request from '../request';

/**
 * 模板 API 类
 * @property {Function} index - 模板内容
 * @module Template
 */
export default class Template {
  /**
   * @name 模板内容
   * @param {Object} params - 行参
   * @returns {Promise :Object} 返回值
   * @exports Template.index
   */

  static async index(params) {
    try {
      const { data } = await request.get('template/index', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Template - static: Index ', error);
      throw error;
    }
  }
}
