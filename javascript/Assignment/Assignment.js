//.....1...........
const fun = (array, pos, rep) => {
    array[pos] = rep;
    return array
    
}
const position = 2;
const replacement = 7;
const arr = [1, 2, 4, 1];
console.log(fun(arr, position, replacement));

//.....2...........
const arr2 =[3, 2, 6, 4, 8]
arr2.pop();
console.log(arr2)


//.......3.........
const arr3 = [5, 9, 7, 1];
const newCard = 8;
arr3.unshift(newCard);
console.log(arr3)


