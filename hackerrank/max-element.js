function processData(input) {   
    if (input.search(/\s/) > -1) {
        var query1 = input.split(" ");
        stack.push(query1[1]);
    }
    else if (input > 3) {
        stack.push(input);
    }
    else if (input == 2) {
        stack.pop();
    }
    else {
        var max = 0;
        for (let i = 0; i < stack.length; i++) {
            if (stack[i] > max) {
                max = stack[i];
            }
        }
        console.log(max);
    }
} 
