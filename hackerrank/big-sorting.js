function bigSorting(unsorted) {
    var strGreaterThan16 = unsorted.filter(function(num, index) {
        var numAndIndex = [];
        if (num.length > 16) {
            
        }
    });
    if (strGreaterThan16.length > 0) {
        
    }
    var arrOfNums = unsorted.map(x => parseInt(x));
    var arrOfSortedNums = arrOfNums.sort((a, b) => a - b);
    return arrOfSortedNums;
}
