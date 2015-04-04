//Coderbyte.com Programming Challenges
//Easy Difficulty

//Have the function ArithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements.


function arithGeo(arr) {

  // calculate the common difference between the first and second numbers
  var difference = arr[1] - arr[0];

  // calculate the common ratio between the first and second numbers
  var ratio = arr[1] / arr[0];

  // create an array to hold the true arithmetic values equal to the length of "arr"
  var arithFormula = [];

  // push the true arithmetic values calculated by the arithmetic formula to the new array
  for (var i = 0, n = 1; i < arr.length, n < arr.length + 1; i++, n++) {
    arithFormula.push(arr[0] + (n - 1) * difference);
  }

  // creat an array to hold the true geometric values equal to the length of "arr"
  var geoFormula = [];

  // push the true geometric values calculated by the geometric formula to the new array
  for (var j = 0, k = 1; j < arr.length, k < arr.length + 1; j++, k++) {
    geoFormula.push(arr[0] * Math.pow(ratio, k - 1));
  }

  // compare the true arithmetic array with the original array
  // if they match, return the string "Arithmetic"
  // also compare the true geomtric array with the original array
  // if they match, return the string "Geometric"
  // if there is no match between the three return -1
  if (arithFormula.join() === arr.join()) {
    return "Arithmetic";
  } else if (geoFormula.join() === arr.join()) {
    return "Geometric";
  } else {
    return -1;
  }

}

arithGeo([2, 6, 18, 54]);
