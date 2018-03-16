/**
 * It converts the date got as param to yyyy-mm-dd format
 * @param date
 * @returns {string}
 */
export function formatDate(date: Date) {
  let month = '' + (date.getMonth() + 1);
  let day = '' + date.getDate();
  const year = date.getFullYear();

  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }

  return [year, month, day].join('-');
}

export function getNextDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth() + 1, date.getDate() + 1);
}
