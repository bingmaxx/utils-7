/**
 * 数据格式化: 保留 num 的 n 位小数
 */
export const numFix = (num, n = 2) => (typeof num === 'number' ? Math.round(num * (10 ** n)) / (10 ** n) : 0);

/**
 * 手机号格式化: 非 '86' 则显示国家码
 */
export const mobileFilter = (value = '--', code) => (code === '86' || !code ? value : `+${code} ${value}`);

/**
 * 默认显示 - 格式化
 */
export const defFilter = (value, text) => (!value ? text : value);

/**
 * 文件大小格式化
 * @param {Number} data 文件大小，单位 B
 * @return {String} size
 */
export const sizeFilter = (data) => {
  let size = null;
  if ((data >> 10) <= 0) {
    size = `${data} B`;
  } else if ((data >> 20) <= 0) {
    size = `${numFix(data / 1024)} KB`;
  } else if ((data >> 30) <= 0) {
    size = `${numFix(data / (1024 * 1024))} MB`;
  }
  return size;
}

/**
 * 货币格式化 https://www.zhangxinxu.com/wordpress/2019/09/js-intl-zh/
 * @param {Nmuber} value 数字
 * @param {*} zero 为空时如何显示
 * @param {Number} fixed 精度
 */
export const currencyFilter = (value, zero = 0, fixed = 2) => {
  if (!value) return zero;

  const num = Number(value).toFixed(fixed);
  return new Intl.NumberFormat(undefined, {
    minimumFractionDigits: fixed
  }).format(num);
}
