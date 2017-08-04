// return an array with subarrays of designated size
function chunkArrayInGroups(arr, size) {
	var chunkGroup = [];
	var chunk;
  	for (var i = 0; i < arr.length; i+=size) {
		chunk = arr.slice(i, i + size);
		chunkGroup.push(chunk);
    }
	return chunkGroup;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
