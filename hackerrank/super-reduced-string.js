function super_reduced_string(s) {
    var same = true;
    const lettersArr = s.sort().reduce((acc, curr, currIndex) => {
        if (currIndex < s.length - 1 && curr != s[currIndex + 1]) {
            acc.concat(cur);
            same = false;
        }
        else {
            same = true;
        }
        return acc;
    }, "");    

    function getString(lettersArr.toString()) {
        return (s === "") ? "Empty String" : s;
    }
    console.log(getString(s));
}
