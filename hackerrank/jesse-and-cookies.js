function processData(input) {
    // Natural -> Natural
    // produce the number of operations it takes to get all cookies to be >= to K
    
    var lines = input.split('\n');
    var firstLine = lines[0].split(' ');
    var cookies = lines[1].split(' ').map(Number);
    var sweetness = firstLine[1];
    var operations = 0;
    
    mix(cookies, sweetness, operations);
} 

function mix(cookies, sweetness, operations) {
    if ()
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
