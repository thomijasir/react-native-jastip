export const add = (num: number): number => num;

export const truncateString = (string: string, maxLength: number) => {
  if (string.length > maxLength) {
    return `${string.slice(0, maxLength)}...${string.slice(
      string.length - 4,
      string.length,
    )}`;
  } else {
    return string;
  }
};

export const limitString = (string: string, maxLength: number) => {
  if (string.length > maxLength) {
    return `${string.slice(0, maxLength)}...`;
  } else {
    return string;
  }
};

export const serializeObjectToURL = (obj: any) => {
  let str = [];
  for (let p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(p + '=' + obj[p]);
    }
  return encodeURIComponent(str.join('&'));
};

export const arrayAllItemEqual = (arr: Array<any>) =>
  arr.every((v) => v === arr[0]);

export const shuffleArray = (array: Array<any>) => {
  // reassign to make sure original array not shuffled
  let shuffled = [...array];

  let currentIndex = shuffled.length,
    temporaryValue,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = shuffled[currentIndex];
    shuffled[currentIndex] = shuffled[randomIndex];
    shuffled[randomIndex] = temporaryValue;
  }
  return shuffled;
};

export const getParameterByName = (name: string, url: string) => {
  name = name.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

export const alphabetOnly = (string: string) =>
  string ? string.replace(/[0-9]/g, '') : '';
