import request from '../request';

/**
 * 工单相关 API 类
 * @property {Function} categoryList - 分类列表
 * @property {Function} list - 工单列表
 * @property {Function} detail - 工单详情
 * @property {Function} add - 添加工单
 * @property {Function} record - 记录工单
 * @module Worksheet
 */
export default class Worksheet {
  /**
   * @name 分类列表
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @returns {Promise :Object} 返回值
   * @exports Worksheet.categoryList
   */

  static async categoryList(params) {
    try {
      const { data } = await request.get('worksheet/categoryList', params);
      return data;
    } catch (error) {
      console.error(
        '[API] Error: class: Worksheet - static: CategoryList ',
        error,
      );
      throw error;
    }
  }

  /**
   * @name 工单列表
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @param {Number} [params.state]  - 状态
   * @param {Number} [params.pn]  - 分页页码
   * @param {Number} [params.ps]  - 分页大小
   * @returns {Promise :Object} 返回值
   * @exports Worksheet.list
   */

  static async list(params) {
    try {
      const { data } = await request.get('worksheet/list', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Worksheet - static: List ', error);
      throw error;
    }
  }

  /**
   * @name 工单详情
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @param {Number} params.sheetId  - 工单ID
   * @returns {Promise :Object} 返回值
   * @exports Worksheet.detail
   */

  static async detail(params) {
    try {
      const { data } = await request.get('worksheet/detail', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Worksheet - static: Detail ', error);
      throw error;
    }
  }

  /**
   * @name 添加工单
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @param {String} params.prodCode  - 售后条形码
   * @param {Number} params.cateId  - 分类ID
   * @param {String} params.content  - 问题描述
   * @param {String} [params.bizId]  - 附件ID
   * @returns {Promise :Object} 返回值
   * @exports Worksheet.add
   */

  static async add(params) {
    try {
      const { data } = await request.get('worksheet/add', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Worksheet - static: Add ', error);
      throw error;
    }
  }

  /**
   * @name 记录工单
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @param {Number} params.sheetId  - 工单ID
   * @param {Number} params.type  - 记录类型
   * @param {String} params.content  - 内容
   * @param {Number} [params.toUid]  - 转交人ID
   * @param {String} [params.toUserType]  - 转交人类型
   * @param {String} [params.images]  - 图片
   * @returns {Promise :Object} 返回值
   * @exports Worksheet.record
   */

  static async record(params) {
    try {
      const { data } = await request.get('worksheet/record', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Worksheet - static: Record ', error);
      throw error;
    }
  }
}
