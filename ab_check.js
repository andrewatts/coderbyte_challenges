//Coderbyte.com Programming Challenges
//Easy Difficulty

//Have the function abCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false.

function abCheck(str) {

  // return true if the string matches 3 characters between the letters a and b using a regex
  // else return false
  return /a...b/ig.test(str);

}

abCheck("Laura sobs");
