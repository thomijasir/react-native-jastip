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

export const arrayAllItemEqual = (arr: Array<any>) => arr.every((v) => v === arr[0]);

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

export const alphabetOnly = (string: string) => string ? string.replace(/[0-9]/g, '') : '';
