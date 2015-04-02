//Coderbyte.com Programming Challenges
//Easy Difficulty

//Have the function vowelCount(str) take the str string parameter being passed and return the number of vowels the string contains (ie. "All cows eat grass" would return 5). Do not count y as a vowel for this challenge.

function vowelCount(str) {

  // put all vowels from the string into an array
  var vowels = str.match(/[aeiou]/gi);

  // if there are no vowels in the string return 0
  // else return the length of the array containing the vowels
  return (vowels === null) ? 0 : vowels.length;

}

vowelCount("Argument goes here");
