//Coderbyte.com Programming Challenges
//Easy Difficulty

//Have the function firstFactorial(num) take the num parameter being passed and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18.

function firstFactorial(num) {

  // create an array to push numbers to
  var arr = [];

  // count down from the num parameter and push the numbers to the array
  for (var i = num; i > 0; i--) {
    arr.push(i);
  }

  // multiply each number element by the previous number element
  var num = arr.reduce(function(previousValue, currentValue) {
    return previousValue * currentValue;
  });

  // return the sum
  return num;

}

firstFactorial(5);
