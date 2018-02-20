process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function diagonalDifference(a) {
    var primaryTopLeft = a[0][0];
    var secondaryTopRight = a[0][a[0].length - 1];
    var middleIndex = Math.round(a.length / 2);
    var middle = a[middleIndex][Math.round(a[middleIndex].length / 2)];
    var lastIndex = a.length - 1;
    var primaryBottomRight = a[lastIndex][a[lastIndex].length - 1];
    var secondaryBottomLeft = a[lastIndex][0];
    
    var sumPrimary = primaryTopLeft + middle + primaryBottomRight;
    var sumSecondary = secondaryTopRight + middle + secondaryBottomLeft;
    
    return (-1 * (sumPrimary - sumSecondary));
}

function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    var result = diagonalDifference(a);
    process.stdout.write("" + result + "\n");

}
