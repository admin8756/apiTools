import request from '../request';

/**
 * 订单 API 类
 * @property {Function} create - 创建订单
 * @property {Function} update - 修改订单
 * @module Order
 */
export default class Order {
  /**
   * @name 创建订单
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @param {Number} params.mid  - 商品id
   * @param {Number} params.price  - 价格
   * @param {String} [params.remarks]  - 备注
   * @returns {Promise :Object} 返回值
   * @exports Order.create
   */

  static async create(params) {
    try {
      const { data } = await request.get('order/create', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Order - static: Create ', error);
      throw error;
    }
  }

  /**
   * @name 修改订单
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @param {Number} params.orderId  - 订单id
   * @param {String} [params.shipAddress]  - 收货地址
   * @param {String} [params.delivery]  - 发货方式
   * @param {String} [params.receive]  - 收货时间
   * @param {String} [params.remarks]  - 备注
   * @returns {Promise :Object} 返回值
   * @exports Order.update
   */

  static async update(params) {
    try {
      const { data } = await request.get('order/update', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Order - static: Update ', error);
      throw error;
    }
  }
}
