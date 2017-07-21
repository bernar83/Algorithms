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

function solve(a0, a1, a2, b0, b1, b2){
    // initialize bob's and alice's score
    var bob = 0;
    var alice = 0;

    // give alice a point if her score is higher, if bob is higher give him a point, if equal no points
    if (a0 > b0) {
        alice++;
    }
    else if (b0 > a0) {
        bob++
    }
    else {
        alice += 0, bob +=0;
    }

    // give alice a point if her score is higher, if bob is higher give him a point, if equal no points
    if (a1 > b1) {
        alice++;
    }
    else if (b1 > a1) {
        bob++;
    }
    else {
        alice += 0, bob += 0;
    }

    // give alice a point if her score is higher, if bob is higher give him a point, if equal no points
    if (a2 > b2) {
        alice++;
    }
    else if (b2 > a2) {
        bob++;
    }
    else {
        alice += 0, bob += 0;
    }

    // print their scores
    console.log(alice, bob);
}

function main() {
    var a0_temp = readLine().split(' ');
    var a0 = parseInt(a0_temp[0]);
    var a1 = parseInt(a0_temp[1]);
    var a2 = parseInt(a0_temp[2]);
    var b0_temp = readLine().split(' ');
    var b0 = parseInt(b0_temp[0]);
    var b1 = parseInt(b0_temp[1]);
    var b2 = parseInt(b0_temp[2]);
    var result = solve(a0, a1, a2, b0, b1, b2);
    console.log(result.join(" "));



}
