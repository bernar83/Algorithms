// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
function mutation(arr) {
  // make indexes in arr lower case
  for (var i = 0; i < arr.length; i++) {
	var lowerCase = arr[i].toLowerCase();
	arr[i] = lowerCase;
  }
  
  // set count
  var count = 0;
  
  // iterate through second element and count if the second element's characters is not in the first element
  for (var j = 0; j < arr[1].length; j++) {
    if (arr[0].indexOf(arr[1][j]) == -1) {
      count++;
    }
  }
  
  if (count > 0) {
    return false;
  }
  else {
    return true;
  }
}

mutation(["hello", "hey"]);
mutation(["hello", "Hello"])
