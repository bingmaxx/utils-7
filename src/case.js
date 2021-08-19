/**
 * 大小驼峰、蛇形、脊柱形 -> 蛇形
 * @param {String} str
 * @return {String} s
 */
export const snakecase = (str) => {
  let s = str.replace(/[A-Z]/g, match => (`_${match.toLowerCase()}`));
  s = s.replace(/-/g, '_');
  s = s.replace(/_+/g, '_');
  s = s.replace(/^[_]/, '');
  return s;
}

/**
 * 大小驼峰、蛇形、脊柱形 -> 大小驼峰
 * @param {String} str
 * @param {Boolean} pascal 是否为帕斯卡形(大驼峰)
 * @return {String} s
 */
export const camelcase = (str, pascal = false) => {
  let s = str.replace(/-/g, '_');
  s = s.replace(/_+/g, '_');
  s = s.replace(/_[a-zA-Z]/g, match => (match[1].toUpperCase()));
  return s.replace(/^[a-zA-Z]/, match => (pascal ? match.toUpperCase() : match.toLowerCase()));
}

/**
 * 大小驼峰、蛇形、脊柱形 -> 脊柱形
 * @param {String} str
 * @return {String} s
 */
export const kebabcase = (str) => {
  let s = str.replace(/[A-Z]/g, match => (`-${match.toLowerCase()}`));
  s = s.replace(/_/g, '-');
  s = s.replace(/-+/g, '-');
  s = s.replace(/^[-]/, '');
  return s;
}
