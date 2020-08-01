class Order {
    constructor(nr, date) {
        this.nr = nr;
        this.date = date;
        this.products = [];
    }

    addProducts(products) {
        this.products = this.products.concat(products);
    }

    getTotal() {
        let total = 0;

        for(let i = 0; i < this.products.length; i++) {
            total += this.products[i].getPrice();
        }

        return total.toFixed(2);
    }

    getDate() {
        const day = this.date.getDate();
        const month = this.date.getMonth() + 1;
        const year = this.date.getFullYear();

        return `${day}.${month}.${year}`;
    }

    getInfo() {
        let output = `Zamówienie nr: ${this.nr}
Data: ${this.getDate()}
Produkty:
`;

        for(let i = 0; i < this.products.length; i++) {
            const product = this.products[i];
            output += `${product.getName()}: ${product.getPrice()}\n`;
        }

        return output;
    }
}

module.exports = Order;
