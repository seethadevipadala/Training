arr = [5, 9, 7, 1, 8];
const getFirstElement = (arr) => {
  const n = arr.length;
  const first = arr.splice(0, 1)[0];
  return first;
};
arr2 = [3, 2, 10, 6, 7];
const getSecondElement = (arr) => {
  return arr.slice(1, 2)[0];
};

console.log(getFirstElement(arr));
console.log(getSecondElement(arr2));
