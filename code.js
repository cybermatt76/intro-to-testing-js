// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}

function sayHello(input) {
        if (input === undefined)
            return "Hello, World!";
    if (input === true || input === false)
        return "Hello, World!";
        else return "Hello, " + (input) + "!";
}

function isFive(input) {
    if (input === 5 || input === "5")
        return true;
    else {
    return false}
}

function isEven(num) {
    if (typeof num === 'string') {
        num = parseInt(num);
    }
    return typeof num === 'number' && num % 2 === 0;
}


