import moment from 'moment'

export const VERSION_MAJOR = 1
export const VERSION_MINOR = 0
export const VERSION_REVISION = 0
export const VERSION_RELEASE = 1
export const VERSION_STATUS = 'alpha'

export const app = '高领云'
export const debug = !!(process.env.NODE_ENV === 'development')

export const debugApi = !!(process.env.NODE_ENV === 'development')

export const debugVuex = !!(process.env.NODE_ENV === 'development')

export const debugView = !!(process.env.NODE_ENV === 'development')

export const mock = true   // !!(process.env.NODE_ENV === 'development') // Use mock data, instead of sending request to server, in development mode.

export const ready = false  // TODO: It's used to hide under-building features.

export const version = `${VERSION_MAJOR}.${VERSION_MINOR}.${VERSION_REVISION}.${VERSION_RELEASE}.${VERSION_STATUS}`

/**
 * Convert date times string to formatted datetime string.
 * @param  String  ts     "2017-06-17T00:00:00"
 */
export function formatTime (str, format = 'YYYY-MM-DD HH:mm') {
  let time = moment(str)
  let retVal = time.format(format)
  // debug && console.debug(`${str} => ${retVal}(${time.format()})`)
  return retVal
}

/**
 * Convert unix timestamp to formatted datetime string.
 * @param  {[type]}  ts     [description]
 * @param  {Boolean} second [description]
 * @return {[type]}         [description]
 */
export function formatTs (ts, format = 'YYYY-MM-DD HH:mm') {
  let time = moment.unix(ts)
  let retVal = time.format(format)
  // debug && console.debug(`${ts} => ${retVal}(${time.format()})`)
  return retVal
}

