function main() {
  const numbers = [213, 123, 23, 12, 1];

  const result = numbers.map((num: number) => {
    return num * num;
  });
  console.log(result);
}

// input with random numbers
// separate map that doubles those numbers
export { main };
