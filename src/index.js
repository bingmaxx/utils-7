export * from './datetime';
export * from './file';
export * from './format';
export * from './storage';

/**
 * 获取 url 中的参数(hash 路由无效)
 * @param {String} name 参数名称
 * @return {String|Number} value 参数值
 */
export const getQueryString = name => {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
  const r = window.location.search.substr(1).match(reg);
  return r !== null ? unescape(r[2]) : null;
};

/**
 * 将对象转为查询字符串，例: {index: 0, size: 15} -> index=0&size=15
 * @param {Object} query 参数对象
 * @return {String} params 查询字符串
 */
export const queryToParams = query => {
  let param = '';
  Object.keys(query).forEach(key => (param += `&${key}=${query[key]}`));
  return param ? param.slice(1) : '';
};

/**
 * 深拷贝
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
 * @param {Array} list 待拷贝 键名 的列表
 * @return {Object} out 拷贝后对象
 */
export const copyByKey = (obj, list) => {
  const out = {};
  list.forEach(key => (out[key] = obj[key]));
  return out;
};
