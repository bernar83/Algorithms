function processData(input) {
    // Natural -> Natural
    // produce the number of operations it takes to get all cookies to be >= to K
    
    var lines = input.split('\n');
    var firstLine = lines[0].split(' ');
    var secondLine = lines[1].split(' ');
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
