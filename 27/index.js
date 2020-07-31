const arr = [1, 55, 0, 15, 33];

arr.sort(function(a, b) {
    return a - b;
});

console.log(arr);





function sayHello(text, getName) {
    return text + " " + getName();
}

const res = sayHello("Cześć", function() {
    return "Piotrek";
});

console.log(res);
