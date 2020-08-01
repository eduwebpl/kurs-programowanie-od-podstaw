class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }
}

const book = new Product("Władca Pierścieni", 49.99);

console.log(book.getPrice());
