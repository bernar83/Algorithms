function super_reduced_string(s) {
    var foundLetters = [];
    
    for (let i = 0; i < s.length; i++) {
        var currentLetter = s[i];
        var lettersMatched = s.match(new RegExp(currentLetter, 'g'));
        if (foundLetters.length % 2 === 1) {
            if (foundLetters.indexOf(currentLetter) === -1) {
                foundLetters.push(currentLetter);
            }
        }    
    }

    var result;
    
    if (foundLetters.length === 0) {
        result = 'Empty String';
    }    
    else {
        result = foundLetters.toString();
    }
    
    return result;
}
