//Coderbyte.com Programming Challenges
//Easy Difficulty

//Using the JavaScript language, have the function letterChanges(str) take the str parameter being passed and modify it using the following algorithm.

//Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

function letterChanges(str) {
  var codes = [];
  for (var i = 0; i < str.length; i++) {
    if (/[^a-z]/i.test(str.charAt(i))) {
      codes.push(str.charCodeAt(i));
    } else {
      codes.push(str.charCodeAt(i) + 1);
    }
  }
  var letters = [];
  for (var j = 0; j < codes.length; j++) {
    letters.push(String.fromCharCode(codes[j]));
  }
  var sentence = letters.join('');
  var capVowels = sentence.replace(/a/g, "A").replace(/e/g, "E").replace(/i/g, "I").replace(/o/g, "O").replace(/u/g, "U");
  return capVowels;
}

letterChanges("hello*3");
