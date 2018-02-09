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
    // produce the number of operations it takes to get all cookies to be at a certain sweetness

    var allSweet = true;
    cookies.forEach(function(x) {
        if (x < sweetness) {
            allSweet = false;
        }
    });
    if (allSweet) {
        return operations;
    }
    else if (cookies.reduce(reducer) < sweetness && cookies.length === 1) {
        return -1; 
    }
    else {
        var newCookie = 1 * cookies[0] + 2 * cookies[1];
        cookies.splice(0, 2);
        cookies.push(newCookie);
        operations++
        return mix(cookies, sweetness, operations);
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
