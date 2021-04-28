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
 * 判断给定日期是本年的第几周
 * @param {Date || String} date 给定日期
 * @return {Number} weeks
 */
export const getWeeks = (date) => {
  const day_ms = 24 * 3600 * 1000;
  const now = typeof date === 'string' ? new Date(date) : date;
  const now_0_ms = now.getTime() - (now.getTime() % day_ms);

  const new_year = new Date(now.getFullYear(), 0, 1);
  const days = Math.round((now_0_ms - new_year.getTime()) / 86400000);
  return Math.ceil((days + ((new_year.getDay() + 1) - 1)) / 7);
}