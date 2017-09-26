var arr = [5,3,1,2,7,6];

function sort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  
  let half = Math.floor(arr.length / 2);
  let left = arr.slice(0, half);
  let right = arr.slice(half);
  
  merge(sort(left), sort(right));
}

function merge(left, right) {
  var result = [];
  
  if (left[0] > right[0]) {
    result.push(right[0]);
  }
  else {
    result.push(left[0]);
  }
  
  return result;
}

sort(arr);
