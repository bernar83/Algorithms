function sort(val) {

  // find the biggest number in the array
	var max = val[0];
	for (var i = 0; i < val.length; i++) {
		if (max < val[i]) {
			max = val[i];
        }
  }

  // make a counting array initialized to zero
	var arr = [];
	for (var i = 0; i <= max; i++) {
		arr[i] = 0;
  }

  // count how many times the numbers are given
	for (var i = 0; i < val.length; i++) {
		for (var j = 0; j <= arr.length; j++) {
			if (val[i] == j) {
				arr[j] += 1;
            }
        }
    }

  // sort the array 
	for (var i = 0, j = 0; i < arr.length; i++) {
		while (arr[i]-- > 0) {
			val[j++] = i;
        }
    }

	return val;
}
