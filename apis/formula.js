import request from '../request';

/**
 * 公式相关 API 类
 * @property {Function} list - 公式列表
 * @property {Function} detail - 单个公式
 * @property {Function} result - 公式运算结果
 * @module Formula
 */
export default class Formula {
  /**
   * @name 公式列表
   * @param {Object} params - 行参
   * @returns {Promise :Object} 返回值
   * @exports Formula.list
   */

  static async list(params) {
    try {
      const { data } = await request.get('formula/list', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Formula - static: List ', error);
      throw error;
    }
  }

  /**
   * @name 单个公式
   * @param {Object} params - 行参
   * @param {Number} params.id  - 公式ID
   * @returns {Promise :Object} 返回值
   * @exports Formula.detail
   */

  static async detail(params) {
    try {
      const { data } = await request.get('formula/detail', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Formula - static: Detail ', error);
      throw error;
    }
  }

  /**
   * @name 公式运算结果
   * @param {Object} params - 行参
   * @param {Number} params.id  - 公式ID
   * @param {String} params.paras  - 公式参数
   * @returns {Promise :Object} 返回值
   * @exports Formula.result
   */

  static async result(params) {
    try {
      const { data } = await request.get('formula/result', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Formula - static: Result ', error);
      throw error;
    }
  }
}
