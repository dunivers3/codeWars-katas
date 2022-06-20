function firstNonConsecutive(arr) {
  // initial value
  // 1 2 3 4
  let previousNum = arr[0];
  // store first non consec
  let first;
  // if prevNum is not equal to next num in arr
  // 2 3 4 6
  for (let i = 1; i < arr.length; i++) {
    if (previousNum + 1 !== arr[i]) {
      // the non consec number gets stored here and end program or else it will look at next num in arr
      first = arr[i];
      break;
    }
    previousNum++;
  }
  // return first non consec number not equal to undefined or first is null
  console.log(first !== undefined ? first : null);
}

/*
function firstNonConsecutive(arr){
    let result = arr.find((val, index) => val !== index + arr[0]);

    console.log(Number.isInteger(result)) ? result : null;
}

*/

firstNonConsecutive([1,2,3,4,5,6,8,9]);

