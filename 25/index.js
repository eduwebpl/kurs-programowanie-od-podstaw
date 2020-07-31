function hello() {
    return "Hello!";
}

function add(a, b) {
    return a + b;
}

const res = add(5, 6);

function abs(value) {
    if(value < 0) {
        return value * -1;
    }

    return value;
}

console.log(abs(-10));

const numbers = [2, 3, 6, 20, 0, 52, 11];



function contains(arr, item) {
    let found = false;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === item) {
            found = true;
            break;
        }
    }

    return found;
}





const res3 = contains(numbers, 99);

console.log(res3);
