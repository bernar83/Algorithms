function super_reduced_string(s) {
    
    var sortedArr = s.split('').sort();
    
    const reducedStr = sortedArr.reduce((acc, curr, indx) => {
        var regex = new RegExp(curr, 'g');
        var foundArrForCurr = s.match(regex);
        var foundArrForAcc = acc.match(regex)
        if (foundArrForCurr.length % 2 === 1 && foundArrForAcc.length === 0) {
            acc = acc.concat(curr);
        }
        return acc;
    }, '');
    
    console.log(reducedStr === "" ? "Empty String" : reducedStr); 
}
