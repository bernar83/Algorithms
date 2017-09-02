function diffArray(arr1, arr2) {
  var _arr1 = arr1;
  var _arr2 = arr2;
  
  _arr1.filter(function(arr) {
    return _arr2.indexOf(arr) == -1;
  });
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
