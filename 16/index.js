const arr = [5, 8, 1, 2, 1, 33, 23, 18, 4];
const arr2 = ["anita", "Tomek", "Ania", "Andrzej", "Mateusz", "Kasia"];

arr.sort(function(a, b) {
    if(a < b) {
        return -1;
    } else if(a > b) {
        return 1;
    } else {
        return 0;
    }
});

// console.log(arr);

console.log(arr2);

arr2.sort(function(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();

    if(a < b) {
        return -1;
    } else if(a > b) {
        return 1;
    } else {
        return 0;
    }
});

console.log(arr2);
