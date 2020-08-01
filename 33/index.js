const Order = require("./Order");
const Product = require("./Product");

const order1 = new Order("100", new Date("2020-03-02"))

const book = new Product("Władca Pierścieni", 49.99);
const ebook = new Product("Harry Potter - E-book", 40);

order1.addProducts([book, ebook]);

console.log(order1.getInfo());
