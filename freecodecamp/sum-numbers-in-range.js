// return sum of the numbers in array and in between
function sumAll(arr) {
  // find lowest number in array
  var low = Math.min(arr[0], arr[1]);
  
  // find highest number in array
  var high = Math.max(arr[0], arr[1]);
  
  var list = [];
  var count = 0;
  
  // sort array and include numbers in between
  for (var i = low; i <= high; i++) {
    list[count++] = i;
  }
  
  // find the sum
  var sum = list.reduce(function(sum, value) {
    return sum + value;
  });
  
  return sum;
}

sumAll([1, 4]);
sumAll([10, 5])
