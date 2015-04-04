//Coderbyte.com Programming Challenges
//Easy Difficulty

//Have the function exOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false. Only these two letters will be entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's.

function exOh(str) {

  // matches all x's and o's in the string and put them in seperate arrays
  var x = str.match(/x/ig);
  var o = str.match(/o/ig);

  // if there are no x's or o's in the string return "false"
  // return "true" if the amount of x's and o's are equal, else return "false" again
  return x === null || o === null ? "false" : x.length === o.length;

}

exOh("xooxxo");
