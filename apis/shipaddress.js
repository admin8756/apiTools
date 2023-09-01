import request from "../request";

/**
 * 收货地址 API 类
 * @property {Function} list - 收货地址列表
 * @property {Function} item - 地址信息
 * @property {Function} save - 保存收货地址
 * @property {Function} delete - 删除收货地址
 * @module ShipAddress
 */
export default class ShipAddress {
  /**
   * @name 收货地址列表
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @returns {Promise :Object} 返回值
   * @exports ShipAddress.list
   */

  static async list(params) {
    try {
      const { data } = await request.get("my/shipAddress/list", params);
      return data;
    } catch (error) {
      console.error("[API] Error: class: ShipAddress - static: List ", error);
      throw error;
    }
  }

  /**
   * @name 地址信息
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @param {String} params.id  - 地址id
   * @returns {Promise<Object>} 返回值
   * @exports ShipAddress.item
   */

  static async item(params) {
    try {
      const { data } = await request.get("my/shipAddress/item", params);
      return data;
    } catch (error) {
      console.error("[API] Error: class: ShipAddress - static: Item ", error);
      throw error;
    }
  }

  /**
   * @name 保存收货地址
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @param {Number} [params.id]  - 地址id
   * @param {String} params.name  - 收货人
   * @param {String} params.phone  - 收货人手机
   * @param {String} params.address  - 收货地址
   * @returns {Promise :Object} 返回值
   * @exports ShipAddress.save
   */

  static async save(params) {
    try {
      const { data } = await request.get("my/shipAddress/save", params);
      return data;
    } catch (error) {
      console.error("[API] Error: class: ShipAddress - static: Save ", error);
      throw error;
    }
  }

  /**
   * @name 删除收货地址
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @param {Number} params.id  - 地址id
   * @returns {Promise :Object} 返回值
   * @exports ShipAddress.delete
   */

  static async delete(params) {
    try {
      const { data } = await request.get("my/shipAddress/delete", params);
      return data;
    } catch (error) {
      console.error("[API] Error: class: ShipAddress - static: Delete ", error);
      throw error;
    }
  }
}
