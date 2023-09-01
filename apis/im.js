import request from '../request';

/**
 * IM回调 API 类
 * @property {Function} call - 回调
 * @property {Function} c2cAfterSendMsg - 未定义
 * @module Im
 */
export default class Im {
  /**
   * @name 回调
   * @param {Object} params - 行参
   * @returns {Promise :Object} 返回值
   * @exports Im.call
   */

  static async call(params) {
    try {
      const { data } = await request.get('im/call', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Im - static: Call ', error);
      throw error;
    }
  }

  /**
   * @name 未定义
   * @param {Object} params - 行参
   * @returns {Promise :Object} 返回值
   * @exports Im.c2cAfterSendMsg
   */

  static async c2cAfterSendMsg(params) {
    try {
      const { data } = await request.get('im/c2cAfterSendMsg', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Im - static: C2cAfterSendMsg ', error);
      throw error;
    }
  }
}
