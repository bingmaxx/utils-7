/**
 * 手机号格式化: 国家码为 '86'时，省略国家码。
 * @param {String} mobile 手机号
 * @param {String} code 国家码
 * @return {*} res
 */
export const mobileFormat = (mobile, code) => ((code === '86' || !code) ? mobile : `+${code} ${mobile}`);

/**
 * 文件大小格式化，'>>' 位运算会把二进制数限制在32位，超出部分被舍弃。本方法只精确到 'GB'
 * eg: 1025 => '1.00 KB'
 * @param {Number} data 文件大小，单位 B
 * @return {String} size
 */
export const fileSizeFormat = (data) => {
  if (typeof data !== 'number') return 0;
  if (data >= 2 ** 30) return `${(data / (2 ** 30)).toFixed(2)} GB`;

  let size = null;
  if ((data >> 10) <= 0) {
    size = `${data.toFixed()} B`;
  } else if ((data >> 20) <= 0) {
    size = `${(data / (2 ** 10)).toFixed(2)} KB`;
  } else {
    size = `${(data / (2 ** 20)).toFixed(2)} MB`;
  }
  return size;
}

/**
 * 货币格式化 https://www.zhangxinxu.com/wordpress/2019/09/js-intl-zh/
 * eg: 1111.1 => '1,111.1'
 * @param {Nmuber} data 数字
 * @param {*} zero 为空时如何显示
 * @param {Number} fixed 精度
 */
export const currencyFormat = (data, zero = 0, fixed = 2) => {
  if (!data) return zero;

  const num = Number(data).toFixed(fixed);
  return new Intl.NumberFormat(undefined, {
    minimumFractionDigits: fixed
  }).format(num);
}
