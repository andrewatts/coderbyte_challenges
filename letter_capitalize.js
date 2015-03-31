//Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.

function letterCapitalize(str) {

  // search for the first letter in each word using a regex
  // replace the first letter with an uppercase letter
  // concat the uppercase letter with the rest of the string
  str = str.replace(/\b[a-z]/g, function(x) {
    return x[0].toUpperCase() + x.substr(1);
  });
  return str;

}

letterCapitalize("i ran there");
