function getIndexToIns(arr, num) {
  var min = arr[0];
  var list = [];
  for (var j = 0; j < arr.length; j++) {
    list[j] = 0;
  }
  
  for (var k = 0; k < list.length; k++) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
  }
}

getIndexToIns([40, 60], 50);