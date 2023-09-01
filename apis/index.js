import request from '../request';

/**
 * 个人中心 API 类
 * @property {Function} userInfo - 用户信息
 * @property {Function} favoriteProdList - 产品收藏列表
 * @property {Function} favoriteArticleList - 知识收藏列表
 * @property {Function} likeArticleCateIds - 文章分类喜好
 * @module Index
 */
export default class Index {
  /**
   * @name 用户信息
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @returns {Promise :Object} 返回值
   * @exports Index.userInfo
   */

  static async userInfo(params) {
    try {
      const { data } = await request.get('my/index/userInfo', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Index - static: UserInfo ', error);
      throw error;
    }
  }

  /**
   * @name 产品收藏列表
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @param {Number} [params.pn]  - 分页页码
   * @param {Number} [params.ps]  - 分页大小
   * @returns {Promise :Object} 返回值
   * @exports Index.favoriteProdList
   */

  static async favoriteProdList(params) {
    try {
      const { data } = await request.get('my/index/favoriteProdList', params);
      return data;
    } catch (error) {
      console.error(
        '[API] Error: class: Index - static: FavoriteProdList ',
        error,
      );
      throw error;
    }
  }

  /**
   * @name 知识收藏列表
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @param {Number} [params.pn]  - 分页页码
   * @param {Number} [params.ps]  - 分页大小
   * @returns {Promise :Object} 返回值
   * @exports Index.favoriteArticleList
   */

  static async favoriteArticleList(params) {
    try {
      const { data } = await request.get(
        'my/index/favoriteArticleList',
        params,
      );
      return data;
    } catch (error) {
      console.error(
        '[API] Error: class: Index - static: FavoriteArticleList ',
        error,
      );
      throw error;
    }
  }

  /**
   * @name 文章分类喜好
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @returns {Promise :Object} 返回值
   * @exports Index.likeArticleCateIds
   */

  static async likeArticleCateIds(params) {
    try {
      const { data } = await request.get('my/index/likeArticleCateIds', params);
      return data;
    } catch (error) {
      console.error(
        '[API] Error: class: Index - static: LikeArticleCateIds ',
        error,
      );
      throw error;
    }
  }
}
