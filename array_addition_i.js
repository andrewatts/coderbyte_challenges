//Coderbyte.com Programming Challenges
//Easy Difficulty

//Using the JavaScript language, have the function arrayAdditionI(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers.

var x = [3, 5, -1, 8, 12]; //true
var y = [5, 7, 16, 1, 2]; //false

function arrayAdditionI(arr) {

  // create a function that sorts numbers in descending order in an array
  function sortNums(a, b) {
    return b - a;
  }

  // sort the numbers in arr
  arr = arr.sort(sortNums);

  // create a variable to hold the largest number
  var sum = arr[0];

  // remove the largest number from the array
  arr.shift();

  // iterate through the array
  // subtract numbers that are smaller than or equal to the sum
  // update the sum with the result
  // if the sum is less than the next number, skip it
  // repeat till the end of the array
  for (var i = 0; i < arr.length; i++) {
    if (sum >= arr[i]) {
      sum -= Math.abs(arr[i]);
    } else if (sum < arr[i]) {
      arr[i + 1];
    }
  }

  // if the sum is = to 0 return "true" else return "false"
  return sum === 0;

}

arrayAdditionI([1, 2, 3, 100]);
