const countWordOccurrences = (sentence: string, word: string): number => {
  const splitedArray: string[] = sentence.toLowerCase().split(" ");
  const newArray: string[] = splitedArray.filter(
    (elem) => elem === word.toLowerCase()
  );
  return newArray.length;
};
