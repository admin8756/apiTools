import request from '../request';

/**
 * 文章相关 API 类
 * @property {Function} categoryList - 分类列表
 * @property {Function} list - 文章列表
 * @property {Function} detail - 文章详情
 * @property {Function} search - 搜索列表
 * @property {Function} solutionList - 解决方案
 * @module Article
 */
export default class Article {
  /**
   * @name 分类列表
   * @param {Object} params - 行参
   * @returns {Promise :Object} 返回值
   * @exports Article.categoryList
   */

  static async categoryList(params) {
    try {
      const { data } = await request.get('article/categoryList', params);
      return data;
    } catch (error) {
      console.error(
        '[API] Error: class: Article - static: CategoryList ',
        error,
      );
      throw error;
    }
  }

  /**
   * @name 文章列表
   * @param {Object} params - 行参
   * @param {Number} [params.cateId]  - 分类ID
   * @param {Number} [params.pn]  - 分页页码
   * @param {Number} [params.ps]  - 分页大小
   * @returns {Promise :Object} 返回值
   * @exports Article.list
   */

  static async list(params) {
    try {
      const { data } = await request.get('article/list', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Article - static: List ', error);
      throw error;
    }
  }

  /**
   * @name 文章详情
   * @param {Object} params - 行参
   * @param {Number} params.articleId  - 文章ID
   * @returns {Promise :Object} 返回值
   * @exports Article.detail
   */

  static async detail(params) {
    try {
      const { data } = await request.get('article/detail', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Article - static: Detail ', error);
      throw error;
    }
  }

  /**
   * @name 搜索列表
   * @param {Object} params - 行参
   * @param {String} params.keyword  - 关键词
   * @returns {Promise :Object} 返回值
   * @exports Article.search
   */

  static async search(params) {
    try {
      const { data } = await request.get('article/search', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Article - static: Search ', error);
      throw error;
    }
  }

  /**
   * @name 解决方案
   * @param {Object} params - 行参
   * @returns {Promise :Object} 返回值
   * @exports Article.solutionList
   */

  static async solutionList(params) {
    try {
      const { data } = await request.get('article/solutionList', params);
      return data;
    } catch (error) {
      console.error(
        '[API] Error: class: Article - static: SolutionList ',
        error,
      );
      throw error;
    }
  }
}
