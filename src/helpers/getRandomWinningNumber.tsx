import { getRandomPossibleOption } from "./getRandomPossibleOption";
import { getRandomInteger } from "./getRandomInteger";

function getRandomWinningNumber(num: number) {
  const random = getRandomInteger(0, 50);
  console.log(changeWinningNumberTimes(random));
  return num;
}

function changeWinningNumberTimes(times: number) {
  for (let number = 1; number <= times; number++) {
    getRandomPossibleOption;
  }
}

export { getRandomWinningNumber };
