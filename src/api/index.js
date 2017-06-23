/**
 * All Remote access APIs go here.
 */
import axios from 'axios'
/**
 * axios configurations.
 */
axios.defaults.timeout = 10000  // timeout in 10 seconds.
// axios.defaults.baseURL = (process.env.NODE_ENV === 'production') ? 'http://wx.golfgreenshow.com' : 'http://devwx.golfgreenshow.com'
axios.defaults.baseURL = 'http://www.greenshow.co'

const debugApi = process.env.NODE_ENV === 'development'

export default {
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
            reject('通讯失败，请检查网络或稍后重试。')
          }
        })
        .catch((error) => {
          console.error(error)
          reject('通讯失败，请检查网络或稍后重试。')
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
   * 查询球队简介
   * curl -X GET --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'AccessCode:ccfb8baa-40ce-4989-b7b0-2abcab956405' 'http://devwx.golfgreenshow.com/api/TeamX/GetTeamProfile?TeamGuid=172701a1-8457-4df1-891c-4fa1c78ef883'
   */
  getTeam (id) {
    return this.send('get', '/api/TeamX/' + id)
  }
}
