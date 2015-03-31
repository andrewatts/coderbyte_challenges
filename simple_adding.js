//Coderbyte.com Programming Challenges
//Easy Difficulty

//Using the JavaScript language, have the function simpleAdding(num) add up all the numbers from 1 to num. For the test cases, the parameter num will be any number from 1 to 1000.

function simpleAdding(num) {

  // create an empty array to store numbers
  var digits = [];

  // push all numbers from 1 up to the nums parameter to the digits array
  for (var i = 1; i <= num; i++) {
    digits.push(i);
  }

  // add up all the numbers in the digits array
  var sum = digits.reduce(function(x, y) {
    return x + y;
  });

  // return the sum
  return sum;

}

simpleAdding(140);
