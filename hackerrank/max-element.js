function processData(input) {
    var inputArr = input.split("\n");
    var stack = [];
    
    for (let i = 0; i < inputArr.length; i++) {
        arrElement = inputArr[i];
        if (arrElement.search(/\s/) > -1) {
            var query1 = arrElement.split(" ");
            stack.push(query1[1]);
        }
        else {
            if (arrElement > 3) {
                continue;
            }
            else if (arrElement == 2) {
                stack.pop();
            }
            else {
                console.log(stack[stack.length - 1]);
            }
        }
    }
} 
