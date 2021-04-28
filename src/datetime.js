const isDate = function (date) {
  if (date === null || date === undefined) return false;
  if (isNaN(new Date(date).getTime())) return false;
  if (Array.isArray(date)) return false; // deal with `new Date([ new Date() ]) -> new Date()`
  return true;
}

const toDate = function (date) {
  return isDate(date) ? new Date(date) : null;
}

/**
 * 日期时间转时间戳
 * @param {*} value 日期时间
 * @param {String} type 时间戳格式 'm', 'ms'
 * @return {Number} res 时间戳
 */
export const date2Timestamp = (value, type) => {
  type = type || 'm';
  const date = toDate(value);
  if (!date) return null;

  const func = {
    'm': () => (Math.round(date.getTime() / 1000)),
    'ms': () => (date.getTime()),
  }
  if (typeof func[type] !== 'function') return null;
  return func[type]();
}

/**
 * 时间戳格式化
 * 推荐的日期格式化库 https://github.com/taylorhakes/fecha
 * @param {Number} value 时间戳
 * @param {String} format 日期时间格式
 * @param {String} type 时间戳格式 'm', 'ms'
 * @return {Number} res 格式化后的日期时间
 */
export const timestampFormat = (value, format, type) => {
  format = format || 'yyyy-MM-dd HH:mm:ss';
  type = type || 'm';
  if (typeof value !== 'number') return;
  const timestamp = type === 'm' ? value * 1000 : value;
  const def = '--';
  if (!isDate(timestamp)) return def;

  const func = {
    'yyyy-MM-dd HH:mm:ss': () => (new Date(timestamp + 28800000).toISOString().substring(0, 19).replace(/[ZT]/g, ' ')),
    'yyyy-MM-dd': () => (new Date(timestamp + 28800000).toISOString().substring(0, 10).replace(/[ZT]/g, ' ')),
    'MM-dd': () => (new Date(timestamp + 28800000).toISOString().substring(5, 10).replace(/[ZT]/g, ' ')),
  };
  if (typeof func[format] !== 'function') return def;
  return func[format]();
}


/**
 * 判断给定日期是本年的第几周
 * @param {*} date 给定日期
 * @return {Number} weeks
 */
export const getWeeks = (date) => {
  const now = toDate(date) || new Date();

  const day_ms = 24 * 3600 * 1000;
  const now_0_ms = now.getTime() - (now.getTime() % day_ms);

  const new_year = new Date(now.getFullYear(), 0, 1);
  const days = Math.round((now_0_ms - new_year.getTime()) / 86400000);
  return Math.ceil((days + ((new_year.getDay() + 1) - 1)) / 7);
}