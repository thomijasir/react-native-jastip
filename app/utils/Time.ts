const monthName = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const convertEpochToDate = (timestamp: number) => {
  const ms = timestamp * 1000;
  const time = new Date(ms);
  const year = time.getUTCFullYear();
  const month = time.getMonth();
  const date = time.getDate();
  return `${date} ${monthName[month]} ${year}`;
};

export const convertEpochToHour = (timestamp: number) => {
  const ms = timestamp * 1000;
  const time = new Date(ms);
  const hour = time.getHours();
  const minute =
    Number(time.getMinutes()) >= 10
      ? time.getMinutes()
      : `0${time.getMinutes()}`;
  return `${hour}:${minute}`;
};

export const convertEpochToTime = (timestamp: number) => {
  const ms = timestamp * 1000;
  const time = new Date(ms);
  const hour = time.getHours();
  const minute =
    Number(time.getMinutes()) >= 10
      ? time.getMinutes()
      : `0${time.getMinutes()}`;
  const year = time.getUTCFullYear();
  const month = time.getMonth();
  const date = time.getDate();
  return `${date} ${monthName[month]} ${year} | ${hour}:${minute}`;
};

export const getMonthYear = (timestamp: number) => {
  const ms = timestamp * 1000;
  const time = new Date(ms);
  const year = time.getUTCFullYear();
  const month = time.getMonth();
  return `${monthName[month]} ${year}`;
};

export const shortDate = (date: string) => {
  const x = new Date(date);
  return `${x.getDate()}/${x.getMonth() + 1}/${x
    .getFullYear()
    .toString()
    .slice(2)}`;
};

export default {
  convertEpochToTime,
  convertEpochToDate,
  convertEpochToHour,
  getMonthYear,
};
