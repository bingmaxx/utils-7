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