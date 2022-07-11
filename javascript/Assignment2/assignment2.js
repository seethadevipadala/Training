birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
const totalBirdCount = (arr) => {
  let total = 0;
  for (let birds in arr) {
    total = total + arr[birds];
  }
  return total;
};
console.log(totalBirdCount(birdsPerDay));

const fixBirdCountLog = (arr) => {
  for (let count in arr) {
    if (count % 2 === 0) arr[count]++;
  }
  return arr;
};

console.log(fixBirdCountLog([2, 5, 0, 7, 4, 1]));
