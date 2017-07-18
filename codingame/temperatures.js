var n = parseInt(readline()); // the number of temperatures to analyse
var temps = readline(); // the n temperatures expressed as integers ranging from -273 to 5526

var tmpArr = temps.split(' ');
var min = tmpArr[0];

if (temps) {
    for (var i = 0; i < tmpArr.length; i++) {
        if (Math.abs(min) > Math.abs(tmpArr[i])) {
            min = tmpArr[i];
        }
        else if (Math.abs(min) === Math.abs(tmpArr[i]) && min < tmpArr[i]) {
            min = tmpArr[i];
        }
    }
    print(min);
}
else {
    print(0);
}
