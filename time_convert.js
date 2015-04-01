//Coderbyte.com Programming Challenges
//Easy Difficulty

//Have the function timeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon.

function timeConvert(min) {

  // divide the number of min by 60 and omit the decimal digits
  // divide the number of min by 60 and display only the remainders
  // concat both values
  return Math.floor(min / 60) + ":" + min % 60;

}

timeConvert(119);
