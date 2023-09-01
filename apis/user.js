import request from '../request';

/**
 * 用户操作 API 类
 * @property {Function} addComment - 添加评论
 * @property {Function} deleteComment - 删除评论
 * @property {Function} topComment - 置顶评论
 * @property {Function} likeComment - 点赞评论
 * @property {Function} likeArticle - 点赞文章
 * @property {Function} likeArticleCate - 文章分类喜好
 * @property {Function} addFavorite - 添加收藏
 * @property {Function} delFavorite - 删除收藏
 * @property {Function} getFavorite - 收藏状态
 * @property {Function} agentApply - 合作伙伴申请
 * @module User
 */
export default class User {
  /**
   * @name 添加评论
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @param {Number} params.articleId  - 文章ID
   * @param {String} params.content  - 评论内容
   * @param {Number} [params.pid]  - 评论ID
   * @param {String} [params.toName]  - 评论对象
   * @returns {Promise :Object} 返回值
   * @exports User.addComment
   */

  static async addComment(params) {
    try {
      const { data } = await request.get('user/addComment', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: User - static: AddComment ', error);
      throw error;
    }
  }

  /**
   * @name 删除评论
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @param {Number} params.commentId  - 评论ID
   * @returns {Promise :Object} 返回值
   * @exports User.deleteComment
   */

  static async deleteComment(params) {
    try {
      const { data } = await request.get('user/deleteComment', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: User - static: DeleteComment ', error);
      throw error;
    }
  }

  /**
   * @name 置顶评论
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @param {Number} params.commentId  - 评论ID
   * @returns {Promise :Object} 返回值
   * @exports User.topComment
   */

  static async topComment(params) {
    try {
      const { data } = await request.get('user/topComment', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: User - static: TopComment ', error);
      throw error;
    }
  }

  /**
   * @name 点赞评论
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @param {Number} params.commentId  - 评论ID
   * @returns {Promise :Object} 返回值
   * @exports User.likeComment
   */

  static async likeComment(params) {
    try {
      const { data } = await request.get('user/likeComment', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: User - static: LikeComment ', error);
      throw error;
    }
  }

  /**
   * @name 点赞文章
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @param {Number} params.articleId  - 文章ID
   * @returns {Promise :Object} 返回值
   * @exports User.likeArticle
   */

  static async likeArticle(params) {
    try {
      const { data } = await request.get('user/likeArticle', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: User - static: LikeArticle ', error);
      throw error;
    }
  }

  /**
   * @name 文章分类喜好
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @param {Number} params.cateIds  - 逗号分隔的文章分类ID
   * @returns {Promise :Object} 返回值
   * @exports User.likeArticleCate
   */

  static async likeArticleCate(params) {
    try {
      const { data } = await request.get('user/likeArticleCate', params);
      return data;
    } catch (error) {
      console.error(
        '[API] Error: class: User - static: LikeArticleCate ',
        error,
      );
      throw error;
    }
  }

  /**
   * @name 添加收藏
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @param {Number} params.type  - 收藏类型（1-产品,2-知识,3-动态）
   * @param {Number} params.targetId  - 收藏目标ID
   * @returns {Promise :Object} 返回值
   * @exports User.addFavorite
   */

  static async addFavorite(params) {
    try {
      const { data } = await request.get('user/addFavorite', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: User - static: AddFavorite ', error);
      throw error;
    }
  }

  /**
   * @name 删除收藏
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @param {Number} params.type  - 收藏类型（1-产品,2-知识,3-动态）
   * @param {Number} params.targetId  - 收藏目标ID
   * @returns {Promise :Object} 返回值
   * @exports User.delFavorite
   */

  static async delFavorite(params) {
    try {
      const { data } = await request.get('user/delFavorite', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: User - static: DelFavorite ', error);
      throw error;
    }
  }

  /**
   * @name 收藏状态
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @param {Number} params.type  - 收藏类型（1-产品,2-知识,3-动态）
   * @param {Number} params.targetId  - 收藏目标ID
   * @returns {Promise :Object} 返回值
   * @exports User.getFavorite
   */

  static async getFavorite(params) {
    try {
      const { data } = await request.get('user/getFavorite', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: User - static: GetFavorite ', error);
      throw error;
    }
  }

  /**
   * @name 合作伙伴申请
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @param {String} params.nationCode  - 国家码
   * @param {String} params.company  - 公司
   * @param {String} params.position  - 职位
   * @returns {Promise :Object} 返回值
   * @exports User.agentApply
   */

  static async agentApply(params) {
    try {
      const { data } = await request.get('user/agentApply', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: User - static: AgentApply ', error);
      throw error;
    }
  }
}
