function bigSorting(unsorted) {
    var arrOfNums = unsorted.map(x => parseInt(x));
    var arrOfSortedNums = arrOfNums.sort((a, b) => a - b);
    return arrOfSortedNums;
}
