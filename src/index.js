export * from './datetime';
export * from './file';
export * from './format';
export * from './storage';

/**
 * 获取 url 中的参数(hash 路由无效)
 * TOFIX: unescape() 方法已废弃
 * @param {String} key 参数名称
 * @return {String|Number} value 参数值
 */
// export const getQueryByKey = key => {
//   const reg = new RegExp(`(^|&)${key}=([^&]*)(&|$)`, 'i');
//   const res = window.location.search.substr(1).match(reg);
//   return res !== null ? unescape(res[2]) : null;
// };

/**
 * 将对象转为查询字符串
 * eg: { index: 0, size: 15 } -> 'index=0&size=15'
 * TOFIX: obj 为非对象的异常处理
 * @param {Object} obj 参数对象
 * @return {String} query 查询字符串
 */
export const obj2Query = obj => {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return '';

  return Object.keys(obj).map(key => (`${key}=${obj[key]}`)).join('&');
};

/**
 * 深拷贝
 * @param {Object} source 带拷贝对象
 * @return {Object} sourceCopy 拷贝后对象
 */
export const deepCopy = source => {
  const sourceCopy = source instanceof Array ? [] : {};
  for (const item in source) {
    sourceCopy[item] = source[item] !== null && !(source[item] instanceof Date) && typeof source[item] === 'object' ? deepCopy(source[item]) : source[item];
  }
  return sourceCopy;
};

/**
 * 按给定键值拷贝对象 - 浅拷贝
 * @param {Object} obj 目标对象
 * @param {Array} list 待拷贝键名的列表
 * @return {Object} res 拷贝后对象
 */
export const copyByKey = (obj, list) => (list.reduce((acc, key) => {
  acc[key] = obj[key];
  return acc;
}, {}));
