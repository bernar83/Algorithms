function processData(input) {
    // Natural -> Natural
    // produce the number of operations it takes to get all cookies to be >= to K
    
    var lines = input.split('\n');
    var firstLine = lines[0].split(' ');
    var cookies = lines[1].split(' ').map(Number).sort((a, b) => a - b);
    var sweetness = firstLine[1];
    var operations = 0;
    
    operations = mix(cookies, sweetness, operations);
    
    console.log(operations);
} 

function mix(cookies, sweetness, operations) {
    // Natural Natural Natural -> Integer
    var reducer = (acc, curr) => acc + curr;
    if (cookies.reduce(reducer) >= sweetness) {
        return operations;
    }
    else if (cookies.reduce(reducer) < sweetness && cookies.length === 1) {
        return -1;
    }
    else {
        
    }
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
