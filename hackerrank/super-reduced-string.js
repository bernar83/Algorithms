function super_reduced_string(s) {
    const result = s.split("").sort().reduce((accumulator, current) => {
        const leng = accumulator.length;
        var regex = new RegExp(current, 'g');
        var foundArr = s.match(regex);

        if (foundArr !== null && foundArr.length % 2 === 1 && accumulator.indexOf(current) === -1) {
            accumulator = accumulator.toString().concat(current);
        }

        return accumulator;
    }, []);
    
    if (result === "") {
        result = "Empty String";
    }
    
    return result;
}
