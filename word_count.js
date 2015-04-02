//Coderbyte.com Programming Challenges
//Easy Difficulty

//Have the function wordCount(str) take the str string parameter being passed and return the number of words the string contains (ie. "Never eat shredded wheat" would return 4). Words will be separated by single spaces.

function wordCount(str) {

  // str.split(' ').length works but is not accurate

  // create a regex that matches a word
  var word = /\S?[\w]+/ig;

  // store the words in an array
  var wordArray = str.match(word);

  // if there are no words return 0, else return the number of words
  return wordArray === null ? 0 : words.length;

}

wordCount("hello world");
