import request from '../request';

/**
 * 询盘 API 类
 * @property {Function} add - 添加
 * @property {Function} item - 查询
 * @module Inquiry
 */
export default class Inquiry {
  /**
   * @name 添加
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @param {Number} params.mid  - 商品id
   * @param {Number} params.num  - 添加数量
   * @returns {Promise :Object} 返回值
   * @exports Inquiry.add
   */

  static async add(params) {
    try {
      const { data } = await request.get('inquiry/add', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Inquiry - static: Add ', error);
      throw error;
    }
  }

  /**
   * @name 查询
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @param {Number} params.mid  - 商品id
   * @returns {Promise :Object} 返回值
   * @exports Inquiry.item
   */

  static async item(params) {
    try {
      const { data } = await request.get('inquiry/item', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Inquiry - static: Item ', error);
      throw error;
    }
  }
}
