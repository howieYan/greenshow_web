/**
 * All Remote access APIs go here.
 */
import axios from 'axios'
import * as lib from '../lib'
import mock from './mock' // TODO: Remove this when build production release.

/**
 * axios configurations.
 */
axios.defaults.timeout = 10000  // timeout in 10 seconds.
axios.defaults.baseURL = (process.env.NODE_ENV === 'production') ? 'http://wx.golfgreenshow.com' : 'http://devwx.golfgreenshow.com'
// axios.defaults.baseURL = 'http://wx.gs.co'

export default {
  token: null,

  setToken (token) {
    lib.debugApi && console.debug(`Set new token=${token}`)
    this.token = token
  },

  /**
   * Check whether specified response is valid and contains data.
   */
  isValid (result) {
    return result && typeof (result.Code) !== 'undefined' && result.Code === 0
  },

  send (method, uri, data = null, token = null) {
    if (token === null) {
      token = this.token
    }
    return new Promise((resolve, reject) => {
      try {
        if (lib.mock) {
          let response = mock.response(method, uri, data)
          if (response && response.Data) {
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
              resolve(response.data)
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
   * curl  -X GET 'http://devwx.golfgreenshow.com/api/Event?id=172701a1-8457-4df1-891c-4fa1c78ef883' --header 'AccessCode:ccfb8baa-40ce-4989-b7b0-2abcab956405'
   */
  listEvent (id, option, page = 0, size = 10) {
    return this.send('get', `/api/Event?id=${id}&option=${option}&page=${page}&size=${size}`)
  },

  /**
   * 查询球队列表
   * curl  -X GET 'http://devwx.golfgreenshow.com/api/Team' --header 'AccessCode:ccfb8baa-40ce-4989-b7b0-2abcab956405'
   */
  listTeam (option, page = 0, size = 10) {
    return this.send('get', `/api/Team?option=${option}&page=${page}&size=${size}`)
  },

  /**
   * 查询球员列表
   * curl  -X GET 'http://devwx.golfgreenshow.com/api/PlayerX' --header 'AccessCode:ccfb8baa-40ce-4989-b7b0-2abcab956405'
   */
  listPlayer (option, page = 0, size = 10) {
    return this.send('get', `/api/Player?option=${option}&page=${page}&size=${size}`)
  },

  /**
   * 查询球队信息
   * curl  -X GET 'http://devwx.golfgreenshow.com/api/Team/172701a1-8457-4df1-891c-4fa1c78ef883' --header 'AccessCode:ccfb8baa-40ce-4989-b7b0-2abcab956405'
   *
   */
  getTeam (id, option = '') {
    return this.send('get', `/api/Team/${id}?option=${option}`)
  },

  /**
   * 查询活动信息
   * curl  -X GET 'http://devwx.golfgreenshow.com/api/Event/172701a1-8457-4df1-891c-4fa1c78ef883' --header 'AccessCode:ccfb8baa-40ce-4989-b7b0-2abcab956405'
   */
  getEvent (id, option = '') {
    return this.send('get', `/api/Event/${id}?option=${option}`)
  }
}
