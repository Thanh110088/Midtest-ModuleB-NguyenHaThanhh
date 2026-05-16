function findSecondLargestNumber(arr) {
  if (arr.length === 0 || !Array.isArray(arr)) {
    return "Invalid";
  }
  let maxArr = -Infinity;
  let secondArr = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (maxArr < arr[i]) {
      secondArr = maxArr;
      maxArr = arr[i];
    } else if (maxArr > arr[i] && secondArr < arr[i]) {
      secondArr = arr[i];
    }
  }
  if (secondArr === -Infinity) {
    return null;
  }
  return secondArr;
}

let arr2 = [4, 7, 4, 8, 9, 5];
let arr3 = [9, 8, 7];
let arr4 = [5, 5, 5];

console.log(findSecondLargestNumber(arr2)); // Output: 8
console.log(findSecondLargestNumber(arr3)); // Output: 8
console.log(findSecondLargestNumber(arr4)); // Output: null
