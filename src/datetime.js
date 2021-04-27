/**
 * 日期格式化
 */
export const dateS = date => (date ? parseInt(new Date(date).getTime() / 1000) : parseInt(new Date().getTime() / 1000));
export const sDate = s => (s ? new Date(s * 1000 + 28800000).toISOString().replace(/[ZT]/g, ' ').substring(0, 19) : '--');
export const sYMD = s => (s ? new Date(s * 1000 + 28800000).toISOString().substring(0, 10).replace(/[ZT]/g, ' ') : '--');
export const sMD = s => (s ? new Date(s * 1000 + 28800000).toISOString().substring(5, 10).replace(/[ZT]/g, ' ') : '--');
export const dateMs = date => (date ? parseInt(new Date(date).getTime()) : parseInt(new Date().getTime()));
export const msDate = s => (s ? new Date(s + 28800000).toISOString().replace(/[ZT]/g, ' ').substring(0, 19) : '--');

/**
 * 返回给定日期是本年的第几周
 * @param {Number} YY 年
 * @param {Number} MM 月
 * @param {Number} DD 日
 * @return {Number} weeks
 */
export const getYearWeek = (YY, MM, DD) => {
  const now = new Date(YY, parseInt(MM) - 1, DD);
  const start = new Date(YY, 0, 1);
  const days = Math.round((now.valueOf() - start.valueOf()) / 86400000);

  return Math.ceil((days + ((start.getDay() + 1) - 1)) / 7);
}