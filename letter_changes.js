//Coderbyte.com Programming Challenges
//Easy Difficulty

//Using the JavaScript language, have the function letterChanges(str) take the str parameter being passed and modify it using the following algorithm.

//Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

function letterChanges(str) {

  // create an array to store character codes
  var codes = [];

  // iterate through the str and push the character codes to the codes array
  for (var i = 0; i < str.length; i++) {

    // if the str test true for characters that are not letters, push those
    // particular characters to the codes array
    if (/[^a-z]/i.test(str.charAt(i))) {
      codes.push(str.charCodeAt(i));
    }

    // otherwise push the character codes for the rest of the characters in the
    // str to the codes array and add one to each character code, this action
    // replaces the letter with the following letter
    else {
      codes.push(str.charCodeAt(i) + 1);
    }
  }

  // create an array to save the letters from the character codes
  var letters = [];

  // iterate through the codes array and push the letters to the letters array
  for (var j = 0; j < codes.length; j++) {
    letters.push(String.fromCharCode(codes[j]));
  }

  // join the elements from the letters array into a string
  var sentence = letters.join('');

  // replace the vowels in the string with uppercase vowels
  var capVowels = sentence.replace(/a/g, "A")
                          .replace(/e/g, "E")
                          .replace(/i/g, "I")
                          .replace(/o/g, "O")
                          .replace(/u/g, "U");

  // return the new str
  return capVowels;

}

letterChanges("hello*3");
