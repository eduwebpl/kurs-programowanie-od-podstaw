const firstName = "Jan";
const lastName = "Nowak";

if(firstName === "Maciej" && lastName === "Kowalski") {
   console.log("Imię to Maciej, nazwisko to Kowalski");
}

if(firstName === "Maciej" || lastName === "Kowalski") {
    console.log("Imię to Maciej lub nazwisko to Kowalski");
}

const name = "Piotr";

if(!name) {
    console.log("Imię nie zostało podane");
}
