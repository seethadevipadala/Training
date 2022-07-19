const array1 = [1, 2, 3,4];
const checkCardType = (arr, cardType) => {
  
  let count=0;
  for (let i in arr) {
   
    if (arr[i] === cardType) {
      count++;
    }
    
  };
  return count;
};
console.log(checkCardType(array1, 3));

const array2=[1, 2, 3, 1, 5, 6]

const determineOddEvenCard = function (arr, card) {
  let even=0;
  let odd=0;
  for (let i in arr) {
    const isEven = arr[i] % 2;
    card ? (
      ( isEven=== 0) ? even++: odd++
 ) : (
        (isEven===1) ? odd++ : even++
      )
  
  }
  return card ? even : odd;
}
console.log(determineOddEvenCard(array2, true));
console.log(determineOddEvenCard(array2, false));


