// return lowest index at which num should be inserted into arr
function getIndexToIns(arr, num) {
  function compareNumbers(a, b) {
    return a - b;
  }
  
  // sort by smallest to largest
  var array = arr.sort(compareNumbers);
  
  // set the minimum value
  var min = array[0];
  
  // set the index number should be inserted to
  var numIndex = 0;
  
  for (var i = 0; i < arr.length; i++) {
    // if value is less than num and num is less than the next value
    if (array[i] < num && num < array[i + 1]) {
      numIndex = i + 1;
    }
    
    // if value and num are equal
    if (array[i] == num) {
      numIndex = i;
    }
    
    // if all values are less than num
    if (array[i] < num) {
      numIndex = i + 1;
    }
  }
  return numIndex;
}

getIndexToIns([40, 60], 50);
getIndexToIns([10, 20, 30, 40, 50], 30)
getIndexToIns([2, 5, 10], 15)
