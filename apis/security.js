import request from '../request';

/**
 * 安全中心 API 类
 * @property {Function} gaSecretKey - 谷歌验证key
 * @property {Function} updateRealName - 修改姓名
 * @property {Function} updatePwd - 修改密码
 * @property {Function} updateFundPwd - 修改资金密码
 * @property {Function} bindGaKey - 绑定谷歌验证
 * @property {Function} unbindGaKey - 解绑谷歌验证
 * @property {Function} sendOldSmsCode - 发送旧手机验证码
 * @property {Function} sendSmsCode - 发送手机验证码
 * @property {Function} bindMobile - 绑定手机
 * @module Security
 */
export default class Security {
  /**
   * @name 谷歌验证key
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @returns {Promise :Object} 返回值
   * @exports Security.gaSecretKey
   */

  static async gaSecretKey(params) {
    try {
      const { data } = await request.get('my/security/gaSecretKey', params);
      return data;
    } catch (error) {
      console.error(
        '[API] Error: class: Security - static: GaSecretKey ',
        error,
      );
      throw error;
    }
  }

  /**
   * @name 修改姓名
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @param {String} params.realName  - 用户姓名
   * @returns {Promise :Object} 返回值
   * @exports Security.updateRealName
   */

  static async updateRealName(params) {
    try {
      const { data } = await request.get('my/security/updateRealName', params);
      return data;
    } catch (error) {
      console.error(
        '[API] Error: class: Security - static: UpdateRealName ',
        error,
      );
      throw error;
    }
  }

  /**
   * @name 修改密码
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @param {String} params.userPwd  - 用户密码
   * @param {String} params.oldPwd  - 用户旧密码
   * @param {String} params.rePwd  - 用户确认密码
   * @returns {Promise :Object} 返回值
   * @exports Security.updatePwd
   */

  static async updatePwd(params) {
    try {
      const { data } = await request.get('my/security/updatePwd', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Security - static: UpdatePwd ', error);
      throw error;
    }
  }

  /**
   * @name 修改资金密码
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @param {String} params.fundPwd  - 资金密码
   * @param {String} params.oldPwd  - 旧资金密码
   * @returns {Promise :Object} 返回值
   * @exports Security.updateFundPwd
   */

  static async updateFundPwd(params) {
    try {
      const { data } = await request.get('my/security/updateFundPwd', params);
      return data;
    } catch (error) {
      console.error(
        '[API] Error: class: Security - static: UpdateFundPwd ',
        error,
      );
      throw error;
    }
  }

  /**
   * @name 绑定谷歌验证
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @param {String} params.gaKey  - 谷歌验证key
   * @param {String} params.gaCode  - 动态验证码
   * @returns {Promise :Object} 返回值
   * @exports Security.bindGaKey
   */

  static async bindGaKey(params) {
    try {
      const { data } = await request.get('my/security/bindGaKey', params);
      return data;
    } catch (error) {
      console.error('[API] Error: class: Security - static: BindGaKey ', error);
      throw error;
    }
  }

  /**
   * @name 解绑谷歌验证
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @param {String} params.gaCode  - 动态验证码
   * @returns {Promise :Object} 返回值
   * @exports Security.unbindGaKey
   */

  static async unbindGaKey(params) {
    try {
      const { data } = await request.get('my/security/unbindGaKey', params);
      return data;
    } catch (error) {
      console.error(
        '[API] Error: class: Security - static: UnbindGaKey ',
        error,
      );
      throw error;
    }
  }

  /**
   * @name 发送旧手机验证码
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @returns {Promise :Object} 返回值
   * @exports Security.sendOldSmsCode
   */

  static async sendOldSmsCode(params) {
    try {
      const { data } = await request.get('my/security/sendOldSmsCode', params);
      return data;
    } catch (error) {
      console.error(
        '[API] Error: class: Security - static: SendOldSmsCode ',
        error,
      );
      throw error;
    }
  }

  /**
   * @name 发送手机验证码
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @param {String} params.nationCode  - 国家代码
   * @param {String} params.mobile  - 用户手机
   * @returns {Promise :Object} 返回值
   * @exports Security.sendSmsCode
   */

  static async sendSmsCode(params) {
    try {
      const { data } = await request.get('my/security/sendSmsCode', params);
      return data;
    } catch (error) {
      console.error(
        '[API] Error: class: Security - static: SendSmsCode ',
        error,
      );
      throw error;
    }
  }

  /**
   * @name 绑定手机
   * @param {Object} params - 行参
   * @param {String} params.token  - 用户token
   * @param {String} params.nationCode  - 国家代码
   * @param {String} params.mobile  - 新手机
   * @param {String} params.smsCode  - 新手机短信验证码
   * @param {String} [params.oldSmsCode]  - 当前手机短信验证码
   * @returns {Promise :Object} 返回值
   * @exports Security.bindMobile
   */

  static async bindMobile(params) {
    try {
      const { data } = await request.get('my/security/bindMobile', params);
      return data;
    } catch (error) {
      console.error(
        '[API] Error: class: Security - static: BindMobile ',
        error,
      );
      throw error;
    }
  }
}
