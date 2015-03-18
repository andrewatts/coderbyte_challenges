//Coderbyte.com Programming Challenges
//Easy Difficulty

//Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.

function firstReverse(str) {

  return str.split('').reverse().join('');

}

var backwards = "Reverse this string.";

firstReverse(backwards);
