const firstName = "Jacek";
let userName;

// if(firstName) {
//     userName = firstName;
// } else {
//     userName = "Nieznajomy";
// }

userName = firstName ? firstName : "Nieznajomy";

console.log("Witaj, " + userName);
