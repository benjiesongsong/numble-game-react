import { getRandomInteger } from "./getRandomInteger";

function getRandomPossibleOption() {
  const possibleOptions = [addThree, multiplyByTwo, squareNumber];
  const random = getRandomInteger(0, 2);
  return possibleOptions[random];
}

function addThree(num: number) {
  return num + 3;
}

function multiplyByTwo(num: number) {
  return num * 2;
}

function squareNumber(num: number) {
  return num * num;
}

export { getRandomPossibleOption };
