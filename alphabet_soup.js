//Coderbyte.com Programming Challenges
//Easy Difficulty

//Have the function alphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.

function alphabetSoup(str) {

  // split the string into an array
  // sort the array elements in alphabetical order
  // join the array back into a string
  return str.split('').sort().join('');

}

alphabetSoup("coderbyte");
