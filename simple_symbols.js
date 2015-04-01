//Coderbyte.com Programming Challenges
//Easy Difficulty

//Using the JavaScript language, have the function simpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false.

function simpleSymbols(str) {

  // regex that matches these +a+
  var bothSides = /\+[a-z]\+/i;

  // regex that matches +a+, +a, or a+
  var allThree = /\+[a-z]\+|\+[a-z]|[a-z]\+/ig;

  // array of matches in the str
  var matches = str.match(allThree);

  // if the array contains no matches return false
  if (matches === null) {
    return false;
  }

  // otherwise iterate through the matches array
  for (var i = 0; i < matches.length; i++) {

    // if the array only contains matches of +a+ return true else return false
    if (bothSides.test(matches[i])) {
      return true;
    } else {
      return false;
    }
  }

}

simpleSymbols("+d+=3=+s+");
//simpleSymbols("f++d+");
//simpleSymbols("aaa");
