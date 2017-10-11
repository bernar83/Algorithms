var high = 0;
for (let i = 2; i < arr.length; i++) {
    for (let j = 2; j < arr[i].length; j++) {
        var top = arr[i-2][j] + arr[i-2][j-1] + arr[i-2][j-2];
        var mid = arr[i-1][j-1];
        var bottom = arr[i][j] + arr[i][j-1] + arr[i][j-2];

        var result = top + mid + bottom;
        if (result > high) {
            high = result;
        }
     }
}
console.log(high);
