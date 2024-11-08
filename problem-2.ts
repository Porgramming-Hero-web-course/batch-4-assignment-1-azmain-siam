const removeDuplicates = (nums: number[]): number[] => {
  let refinedArray: number[] = [];

  for (const num of nums) {
    if (!refinedArray.includes(num)) {
      refinedArray.push(num);
    }
  }
  return refinedArray;
};
