import request from '../request';

/**
 * 账户 API 类
 * @property {Function} countryList - 国家列表
 * @property {Function} sendEmailCode - 发送邮箱验证码
 * @property {Function} sendSmsCode - 发送短信验证码
 * @property {Function} captcha - 图片验证码
 * @property {Function} register - 注册
 * @property {Function} login - 登录
 * @property {Function} logout - 退出
 * @property {Function} checkLogin - 检查是否登录
 * @property {Function} findPwdVerify - 重置密码验证
 * @property {Function} sendResetPwdEmail - 发送重置密码邮箱验证码
 * @property {Function} sendResetPwdSms - 发送重置密码短信验证码
 * @module Account
 */
export default class Account {
  /**
   * @name 国家列表
   * @param {Object} params - 行参
   * @returns {Promise :Object} 返回值
   * @exports Account.countryList
   */

  static async countryList(params) {
    try {
      const { data } = await request.get('account/countryList', params);
      return data;
    } catch (error) {
      console.error(
        '[API] Error: class: Account - static: CountryList ',
        error,
      );
      throw error;
    }
  }

  /**
   * @name 发送邮箱验证码
   * @param {Object} params - 行参
   * @param {String} params.email  - 电子邮箱
   * @returns {Promise :Object} 返回值
   * @exports Account.sendEmailCode
   */

  static async sendEmailCode(params) {
    try {
      const { data } = await request.get('account/sendEmailCode', params);
      return data;
    } catch (error) {
      console.error(
        '[API] Error: class: Account - static: SendEmailCode ',
        error,
      );
      throw error;
    }
  }

  /**
   * @name 发送短信验证码
   * @param {Object} params - 行参
   * @param {String} params.nationCode  - 国籍
   * @param {String} params.mobile  - 手机号码
   * @returns {Promise :Object} 返回值
   * @exports Account.sendSmsCode
   */

  static async sendSmsCode(params) {
    try {
      const { data } = await request.get('account/sendSmsCode', params);
      return data;
    } catch (error) {
      console.error(
        '[API] Error: class: Account - static: SendSmsCode ',
        error,
      );
      throw error;
    }
  }

  /**
   * @name 图片验证码
   * @param {Object} params - 行参
   * @returns {Promise :Object} 返回值
   * @exports Account.captcha
   */

  static async captcha(params) {
    try {
      const { data } = await request.get('account/captcha', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Account - static: Captcha ', error);
      throw error;
    }
  }

  /**
   * @name 注册
   * @param {Object} params - 行参
   * @param {String} params.rtype  - 注册类型
   * @param {String} params.nationCode  - 国籍
   * @param {String} [params.mobile]  - 手机号码
   * @param {String} [params.smsCode]  - 短信验证码
   * @param {String} [params.email]  - 电子邮箱
   * @param {String} [params.emailCode]  - 邮箱验证码
   * @param {String} params.userPwd  - 账号密码
   * @param {Number} [params.inviteUid]  - 邀请人UID
   * @returns {Promise :Object} 返回值
   * @exports Account.register
   */

  static async register(params) {
    try {
      const { data } = await request.get('account/register', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Account - static: Register ', error);
      throw error;
    }
  }

  /**
   * @name 登录
   * @param {Object} params - 行参
   * @param {String} params.account  - 账号
   * @param {String} params.password  - 密码
   * @returns {Promise :Object} 返回值
   * @exports Account.login
   */

  static async login(params) {
    try {
      const { data } = await request.get('account/login', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Account - static: Login ', error);
      throw error;
    }
  }

  /**
   * @name 退出
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @returns {Promise :Object} 返回值
   * @exports Account.logout
   */

  static async logout(params) {
    try {
      const { data } = await request.get('account/logout', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Account - static: Logout ', error);
      throw error;
    }
  }

  /**
   * @name 检查是否登录
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @returns {Promise :Object} 返回值
   * @exports Account.checkLogin
   */

  static async checkLogin(params) {
    try {
      const { data } = await request.get('account/checkLogin', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Account - static: CheckLogin ', error);
      throw error;
    }
  }

  /**
   * @name 重置密码验证
   * @param {Object} params - 行参
   * @param {String} params.findType  - 重置类型
   * @param {String} params.operate  - 操作
   * @param {String} params.account  - 账号
   * @param {String} [params.smsCode]  - 短信验证码
   * @param {String} [params.emailCode]  - 邮箱验证码
   * @param {String} [params.clientTokenId]  - 验证Token
   * @param {String} [params.userPwd]  - 登录密码
   * @param {String} [params.rePwd]  - 确认密码
   * @returns {Promise :Object} 返回值
   * @exports Account.findPwdVerify
   */

  static async findPwdVerify(params) {
    try {
      const { data } = await request.get('account/findPwdVerify', params);
      return data;
    } catch (error) {
      console.error(
        '[API] Error: class: Account - static: FindPwdVerify ',
        error,
      );
      throw error;
    }
  }

  /**
   * @name 发送重置密码邮箱验证码
   * @param {Object} params - 行参
   * @param {String} params.account  - 电子邮箱
   * @param {String} params.clientTokenId  - 验证Token
   * @returns {Promise :Object} 返回值
   * @exports Account.sendResetPwdEmail
   */

  static async sendResetPwdEmail(params) {
    try {
      const { data } = await request.get('account/sendResetPwdEmail', params);
      return data;
    } catch (error) {
      console.error(
        '[API] Error: class: Account - static: SendResetPwdEmail ',
        error,
      );
      throw error;
    }
  }

  /**
   * @name 发送重置密码短信验证码
   * @param {Object} params - 行参
   * @param {String} params.account  - 手机
   * @param {String} params.clientTokenId  - 验证Token
   * @returns {Promise :Object} 返回值
   * @exports Account.sendResetPwdSms
   */

  static async sendResetPwdSms(params) {
    try {
      const { data } = await request.get('account/sendResetPwdSms', params);
      return data;
    } catch (error) {
      console.error(
        '[API] Error: class: Account - static: SendResetPwdSms ',
        error,
      );
      throw error;
    }
  }
}
