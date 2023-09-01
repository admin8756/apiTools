import request from '../request';

/**
 * 产品相关 API 类
 * @property {Function} brandList - 品牌列表
 * @property {Function} categoryList - 分类列表
 * @property {Function} modelList - 产品型号列表
 * @property {Function} detail - 产品型号详情
 * @property {Function} search - 搜索列表
 * @module Prod
 */
export default class Prod {
  /**
   * @name 品牌列表
   * @param {Object} params - 行参
   * @returns {Promise :Object} 返回值
   * @exports Prod.brandList
   */

  static async brandList(params) {
    try {
      const { data } = await request.get('prod/brandList', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Prod - static: BrandList ', error);
      throw error;
    }
  }

  /**
   * @name 分类列表
   * @param {Object} params - 行参
   * @param {Number} [params.parentId]  - 分类ID
   * @returns {Promise :Object} 返回值
   * @exports Prod.categoryList
   */

  static async categoryList(params) {
    try {
      const { data } = await request.get('prod/categoryList', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Prod - static: CategoryList ', error);
      throw error;
    }
  }

  /**
   * @name 产品型号列表
   * @param {Object} params - 行参
   * @param {Number} [params.brandId]  - 品牌ID
   * @param {Number} [params.cid]  - 分类ID
   * @param {Number} [params.pn]  - 分页页码
   * @param {Number} [params.ps]  - 分页大小
   * @returns {Promise :Object} 返回值
   * @exports Prod.modelList
   */

  static async modelList(params) {
    try {
      const { data } = await request.get('prod/modelList', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Prod - static: ModelList ', error);
      throw error;
    }
  }

  /**
   * @name 产品型号详情
   * @param {Object} params - 行参
   * @param {Number} [params.modelId]  - 型号ID
   * @param {String} [params.specStr]  - 规格字符串
   * @returns {Promise :Object} 返回值
   * @exports Prod.detail
   */

  static async detail(params) {
    try {
      const { data } = await request.get('prod/detail', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Prod - static: Detail ', error);
      throw error;
    }
  }

  /**
   * @name 搜索列表
   * @param {Object} params - 行参
   * @param {String} params.keyword  - 关键词
   * @returns {Promise :Object} 返回值
   * @exports Prod.search
   */

  static async search(params) {
    try {
      const { data } = await request.get('prod/search', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Prod - static: Search ', error);
      throw error;
    }
  }
}
