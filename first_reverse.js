//Coderbyte.com Programming Challenges
//Easy Difficulty

//Have the function firstReverse(str) take the str parameter being passed and return the string in reversed order.

function firstReverse(str) {

  // split the str into an array
  // reverse the array
  // join the reversed array back to a string
  return str.split('').reverse().join('');

}

var backwards = "Reverse this string.";

firstReverse(backwards);
