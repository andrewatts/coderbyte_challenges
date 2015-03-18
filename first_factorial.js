//Coderbyte.com Programming Challenges
//Easy Difficulty

//Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18.

function firstFactorial(num) {

  var arr = [];
  for (var i = num; i>0; i--) {
    arr.push(i);
  }
  var num = arr.reduce(function(previousValue, currentValue) {
    return previousValue*currentValue;
  });
  return num;

}

firstFactorial(5);
