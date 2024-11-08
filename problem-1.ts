const sumArray = (numbers: number[]): number => {
  let sum: number = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
};
