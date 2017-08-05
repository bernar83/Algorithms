// return truthy values in an array
function bouncer(arr) {
  // filter through each element in given array
  var trueArr = arr.filter(function(val) {
	return val;
  });
  return trueArr;
}

bouncer([7, "ate", "", false, 9]);
