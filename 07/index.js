const number = 20;

const res = number === 20;

console.log(res);

if(number !== "20") {
    console.log("Liczba nie jest równa 20");
}

if(number > 30) {
    console.log("Liczba jest większa od 30");
}

if(number < 30) {
    console.log("Liczba jest mniejsza od 30");
}

if(number >= 20) {
    console.log("Liczba jest większa lub równa 20");
}

if(number <= 20) {
    console.log("Liczba jest mniejsza lub równa 20");
}

const number2 = 6;
const isEven = (number2 % 2) === 0;
