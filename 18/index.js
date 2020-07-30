const person = {
    firstName: "Jacek",
    lastName: "Kowalski",
    hobbies: ["sport", "motoryzacja"],
    sayHello: function() {
        console.log("Cześć! Jestem " + this.firstName);
    }
};

person.firstName = "Piotr";

person.sayHello();
