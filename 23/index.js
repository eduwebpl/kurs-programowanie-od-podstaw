// for(let i = 0; i <= 20; i++) {
//     if(i % 2 === 0) {
//         continue;
//     }

//     console.log(i);
// }

const numbers = [2, 3, 20, 0, 8, 50, 1, 17];
let containsZero = false;

for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);

    if(numbers[i] === 0) {
        containsZero = true;
        break;
    }
}

console.log(containsZero ? "Tablica zawiera zero" : "Tablica nie zawiera zera");
