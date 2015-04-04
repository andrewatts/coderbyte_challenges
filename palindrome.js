//Coderbyte.com Programming Challenges
//Easy Difficulty

//Have the function palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string.

function palindrome(str) {

  // split the string into an array then join it to get rid of the spaces
  // make all letters lowercase
  var forwards = str.split(' ').join('').toLowerCase();

  // split and reverse the string so that the letter are backwards then join them again
  // make all letters lowercase
  var backwards = str.split('').reverse().join('').split(' ').join('').toLowerCase();

  // see if both strings match up
  return forwards === backwards;

}

palindrome("never odd or even");
