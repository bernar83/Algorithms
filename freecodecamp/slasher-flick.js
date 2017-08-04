// return leftover array after splicing from indicated number
function slasher(arr, howMany) {
  var slash = arr.splice(0, howMany);
  return arr;
}

slasher([1, 2, 3], 2);
