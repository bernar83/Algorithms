function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    
    var arrReverse = arr.reverse().join(' ');
    console.log(arrReverse);
}
