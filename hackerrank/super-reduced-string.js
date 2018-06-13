function super_reduced_string(s) {
    const lettersArr = s.sort().reduce((acc, curr, currIndex) => {
        const length = accumulator.length
        if (currIndex !== s.length - 1 && curr !== s[currIndex + 1]) {
            acc.push(cur);
        }
        return acc;
    }, []);    

    function getString(lettersArr.toString()) {
        return (s === "") ? "Empty String" : s;
    }
    console.log(getString(s));
}
