const person = {
    "first name": "Jacek",
    lastName: "Kowalski",
    age: 33
};

person.job = "programista";

const person2 = person;

person2.age = 50;

delete person.age;

// console.log(person);
// console.log(person2);
// console.log(person === person2);

const dict = {
    1: "jeden",
    2: "dwa",
    3: "trzy"
};

const number = 4;
const word = dict[number] || "wartość nieznana";

console.log(word);
