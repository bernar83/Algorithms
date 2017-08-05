// Remove all elements from the initial array that are of the same value as the following arguments
function destroyer(arr) {
  var args = Array.from(arguments);
  var destroy = arr.filter(function(val) {
    // if argument length is less than 4
    if (args.length < 4) {
      return val != args[1] && val != args[2];
    }
    // if argument length is 4 or greater
    else {
      return val != args[1] && val != args[2] && val != args[3];
    }
  });
  return destroy;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([3, 5, 1, 2, 2], 2, 3, 5);