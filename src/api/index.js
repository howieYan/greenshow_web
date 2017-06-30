/**
 * All Remote access APIs go here.
 */
import axios from 'axios'
/**
 * axios configurations.
 */
axios.defaults.timeout = 10000  // timeout in 10 seconds.
axios.defaults.baseURL = (process.env.NODE_ENV === 'production') ? 'http://wx.golfgreenshow.com' : 'http://devwx.golfgreenshow.com'
// axios.defaults.baseURL = 'http://wx.gs.co'

const debugApi = process.env.NODE_ENV === 'development'

export default {
  /**
   * Check whether specified response is valid and contains data.
   */
  isValid (result) {
    return result && typeof (result.ret) !== 'undefined' && result.ret === 0
  },

  send (method, uri, data = null, token = null) {
    return new Promise((resolve, reject) => {
      try {
        axios({
          method: method,
          url: uri,
          data: data,
          headers: {
            AccessCode: token
          }
          // withCredentials: true
        })
        .then(response => {
          debugApi && console.debug(response ? JSON.stringify(response, null, '\t') : `${method} ${uri}, ` + (data ? JSON.stringify(data, null, '\t') : ''))
          if (response && response.data) {
            resolve(response.data)
          }
          else {
            reject(new Error('通讯失败，请检查网络或稍后重试。'))
          }
        })
        .catch((error) => {
          console.error(error)
          reject(new Error('通讯失败，请检查网络或稍后重试。'))
        })
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
   * curl  -X GET 'http://devwx.golfgreenshow.com/api/EventX?id=172701a1-8457-4df1-891c-4fa1c78ef883' --header 'AccessCode:ccfb8baa-40ce-4989-b7b0-2abcab956405'
   */
  listEvent (id, option, page = 0, size = 10) {
    return this.send('get', `/api/EventX?id=${id}&option=${option}&page=${page}&size=${size}`)
  },

  /**
   * 查询球队列表
   * curl  -X GET 'http://devwx.golfgreenshow.com/api/TeamX' --header 'AccessCode:ccfb8baa-40ce-4989-b7b0-2abcab956405'
   */
  listTeam (option, page = 0, size = 10) {
    return this.send('get', `/api/TeamX?option=${option}&page=${page}&size=${size}`)
  },

  /**
   * 查询球员列表
   * curl  -X GET 'http://devwx.golfgreenshow.com/api/PlayerX' --header 'AccessCode:ccfb8baa-40ce-4989-b7b0-2abcab956405'
   */
  listPlayer (option, page = 0, size = 10) {
    return this.send('get', `/api/PlayerX?option=${option}&page=${page}&size=${size}`)
  },

  /**
   * 查询球队信息
   * curl  -X GET 'http://devwx.golfgreenshow.com/api/TeamX/172701a1-8457-4df1-891c-4fa1c78ef883' --header 'AccessCode:ccfb8baa-40ce-4989-b7b0-2abcab956405'
   */
  getTeam (id, option = '') {
    return this.send('get', `/api/TeamX/${id}?option=${option}`)
  },

  /**
   * 查询活动信息
   * curl  -X GET 'http://devwx.golfgreenshow.com/api/EventX/172701a1-8457-4df1-891c-4fa1c78ef883' --header 'AccessCode:ccfb8baa-40ce-4989-b7b0-2abcab956405'
   */
  getEvent (id, option = '') {
    return this.send('get', `/api/EventX/${id}?option=${option}`)
  }
}
