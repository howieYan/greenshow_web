/**
 * All Remote access APIs go here.
 */
import axios from 'axios'
import * as lib from '../lib'
import mock from './mock' // TODO: Remove this when build production release.
import Router from '../router'

/**
 * axios configurations.
 */
axios.defaults.timeout = 10000  // timeout in 10 seconds.
axios.defaults.baseURL = (process.env.NODE_ENV === 'production') ? 'http://wx.golfgreenshow.com' : 'http://devwx.golfgreenshow.com'
// axios.defaults.baseURL = 'http://wx.gs.co'

export default {
  ok: 800,
  token: null,

  getToken () {
    if (this.token === null) {
      this.token = localStorage.getItem('token')
      if (!this.token) {
        this.token = ''
      }
      console.debug(`Loaded token: ${this.token}`)
    }
    return this.token
  },

  setToken (token) {
    lib.debugApi && console.debug(`Set new token=${token}`)
    this.token = token
    if (!this.token) {
      this.token = ''
    }
    localStorage.setItem('token', this.token)
  },

  /**
   * Check whether specified response is valid and contains data.
   */
  isValid (result) {
    return result && typeof (result.code) !== 'undefined' && result.code === this.ok
  },

  /**
   * Authorized with wechat.
   */
  loginWithWechat () {
    let appid = 'wx4ede82d46b4d6b2b'
    let urlback = encodeURIComponent('http://wx.golfgreenshow.com/api/User/WechatH5')
    let state = encodeURIComponent(Router.currentRoute.fullPath)
    let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${urlback}&response_type=code&scope=snsapi_userinfo&state=${state}#wechat_redirect`
    window.location.href = url
  },

  /**
   * Login with GreenShow account.
   */
  loginWithAccount () {
    Router.replace({
      path: '/login',
      query: { redirect: Router.currentRoute.fullPath }
    })
  },

  /**
   * There's no access code, or it's expired.
   */
  relogin () {
    lib.debugApi && console.debug(`Relogin`)
    let self = this
    setTimeout(function () {
      lib.isWechat() ? self.loginWithWechat() : self.loginWithAccount()
    }, 500)
  },

  send (method, uri, data = null, token = null) {
    if (token === null) {
      token = this.getToken()
    }
    return new Promise((resolve, reject) => {
      try {
        if (lib.mock) {
          let response = mock.response(method, uri, data)
          if (response && response.data) {
            resolve(response)
          }
          else {
            reject(new Error('Mock failed!'))
          }
        }
        else {
          axios({
            method: method,
            url: uri,
            data: data,
            headers: {
              Token: token
            }
            // withCredentials: true
          })
          .then(response => {
            lib.debugApi && console.debug(response ? JSON.stringify(response, null, '\t') : `${method} ${uri}, ` + (data ? JSON.stringify(data, null, '\t') : ''))
            if (response && response.data) {
              if (response.data.code === -1) {
                this.relogin()
              }
              else {
                resolve(response.data)
              }
            }
            else {
              reject(new Error('通讯失败，请检查网络或稍后重试。'))
            }
          })
          .catch((error) => {
            console.error(error)
            reject(new Error('通讯异常，请检查网络或稍后重试。'))
          })
        }
      }
      catch (e) {
        console.error(`Exception: ${e}`)
        reject(e)
      }
    })
  },

  stringify (data) {
    return Object.keys(data).map((i) => i + '=' + data[i]).join('&')
  },

  /**
   * 查询活动列表
   * curl  -X GET 'http://devwx.golfgreenshow.com/api5/Event?id=172701a1-8457-4df1-891c-4fa1c78ef883' --header 'AccessCode:ccfb8baa-40ce-4989-b7b0-2abcab956405'
   */
  listEvent (id, option, page = 0, size = 10) {
    return this.send('get', `/api5/Event?id=${id}&option=${option}&page=${page}&size=${size}`)
  },

  /**
   * 查询球队历史列表
   */
  listHistory (id, option, page = 0, size = 10) {
    return this.send('get', `/api5/History?id=${id}&option=${option}&page=${page}&size=${size}`)
  },

  /**
   * 查询球队荣誉列表
   */
  listHonor (id, option, page = 0, size = 10) {
    return this.send('get', `/api5/Honor?id=${id}&option=${option}&page=${page}&size=${size}`)
  },

  /**
   * 查询新闻公告列表
   */
  listNews (id, option, page = 0, size = 10) {
    return this.send('get', `/api5/News?id=${id}&option=${option}&page=${page}&size=${size}`)
  },

  /**
   * 查询球队列表
   * curl  -X GET 'http://devwx.golfgreenshow.com/api5/Team' --header 'AccessCode:ccfb8baa-40ce-4989-b7b0-2abcab956405'
   */
  listTeam (option, page = 0, size = 10) {
    return this.send('get', `/api5/Team?option=${option}&page=${page}&size=${size}`)
  },

  /**
   * 查询球员列表
   * curl  -X GET 'http://devwx.golfgreenshow.com/api5/PlayerX' --header 'AccessCode:ccfb8baa-40ce-4989-b7b0-2abcab956405'
   */
  listTeamPlayer (id, option = 'all', page = 0, size = 10) {
    return this.send('get', `/api5/TeamPlayer?id=${id}&option=${option}&page=${page}&size=${size}`)
  },

  /**
   * 查询球员列表
   * curl  -X GET 'http://devwx.golfgreenshow.com/api5/PlayerX' --header 'AccessCode:ccfb8baa-40ce-4989-b7b0-2abcab956405'
   */
  listPlayer (option, page = 0, size = 10) {
    return this.send('get', `/api5/Player?option=${option}&page=${page}&size=${size}`)
  },

  /**
   * Login
   * curl -X POST "http://devwx.golfgreenshow.com/api5/User/Login" -d "phone=13585562369&code=111111"
   */
  login (phone, code) {
    return this.send('post', `/api5/User/Login`, { phone: phone, code: code })
  },

  /**
   * Login
   * curl -X POST "http://devwx.golfgreenshow.com/api5/User/Sms" -d "phone=13585562369"
   */
  sms (phone) {
    return this.send('post', `/api5/User/Sms`, { phone: phone })
  },

  /**
   * 查询活动信息
   * curl  -X GET 'http://devwx.golfgreenshow.com/api5/Event/172701a1-8457-4df1-891c-4fa1c78ef883' --header 'AccessCode:ccfb8baa-40ce-4989-b7b0-2abcab956405'
   */
  getEvent (id, option = '') {
    return this.send('get', `/api5/Event/${id}?option=${option}`)
  },

  /**
   * 查询球队历史记录
   */
  getHistory (id, option = '') {
    return this.send('get', `/api5/History/${id}?option=${option}`)
  },

  /**
   * 查询球队荣誉记录
   */
  getHonor (id, option = '') {
    return this.send('get', `/api5/Honor/${id}?option=${option}`)
  },

  /**
   * 查询新闻公告记录
   */
  getNews (id, option = '') {
    return this.send('get', `/api5/News/${id}?option=${option}`)
  },

  /**
   * 查询球队信息
   * curl  -X GET 'http://devwx.golfgreenshow.com/api5/Team/172701a1-8457-4df1-891c-4fa1c78ef883' --header 'AccessCode:ccfb8baa-40ce-4989-b7b0-2abcab956405'
   *
   */
  getTeam (id, option = '') {
    return this.send('get', `/api5/Team/${id}?option=${option}`)
  },

  /**
   * 查询活动信息
   * curl  -X GET 'http://devwx.golfgreenshow.com/api5/Event/Enter' --header 'AccessCode:ccfb8baa-40ce-4989-b7b0-2abcab956405'
   */
  enter (id) {
    return this.send('post', `/api5/Event/Enter`, { id: id })
  }
}
