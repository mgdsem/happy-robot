export const run = () => {
  const myMap = (arr, callback) => {
    const resultArr = [];
    for (let i = 0; i < arr.length; i++) {
      const resultItem = callback(arr[i], i);
      resultArr.push(resultItem);
    }
    return resultArr;
  };

  console.log(myMap([1, 2, 3], (item, index) => item + index));

  console.log([1, 2, 3].map(i => i + 1));
};
