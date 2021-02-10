const numbers = [2, 3, 17, 32, 28, 9, 100];

let text = "Wylosowane liczby to: ";

for(let i = 0; i < numbers.length; i++) {
    text += numbers[i];

    if(i !== numbers.length - 1) {
        text += ", ";
    }
}

console.log(text);
