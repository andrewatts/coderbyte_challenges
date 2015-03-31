//Coderbyte.com Programming Challenges
//Easy Difficulty

//Have the function longestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.

var sen = "Argument goes here for documentation.";

function longestWord(sen) {

  //Split the string into an array
  var a = sen.split(' ');

  //Create a container to hold the new array
  var b = [];

  //Remove punctuation from each element then push to the empty array "b"
  for (var k = 0; k < a.length; k++) {
    b.push(a[k].replace(/\W/gi, ''));
  }

  //Update "a"
  a = b;

  //Set a variable to save the longest word
  var mostChar;

  //If it's a one word string, save and update "mostChar"
  if (a.length === 1) {
    mostChar = a[0];
  }

  //Loop through the array
  for (var i = 0, j = 1; i < a.length - 1, j < a.length;) {

    //Creat two variables for comparing the first and second element lengths in the array
    var el = a[i].length;
    var compare = a[j].length;

    //If the first and second element have the same length, update and save the first element to "mostChar"
    if (el === compare) {
      mostChar = a[i];
      i = i;
      j += 1;
    }
    //If "el" length is greater than "compare", update and save the element to "mostChar"
    else if (el > compare) {
      mostChar = a[i];
      j += 1;
    } else {
      mostChar = a[j];
      i = j;
      j = i + 1;
    }
  }
  return mostChar;

}

longestWord(sen);
