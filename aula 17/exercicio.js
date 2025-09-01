// --------------------------
// 1. Discount Function
// --------------------------
// Create a function `discount10(price)` that receives a price
// and returns the price after applying a 10% discount.

let price = '';
function discount10(price) {
  // implement: return discounted price
   price -= price * 0.1
    return price
}
console.log(price = 10); // adding a value to the price variable to test the function
console.log(discount10(100)); // should return 90
// --------------------------
// 2. Introduction to Classes
// --------------------------
// Create a class Product with:
// - properties: name, price
// - method: describe() returning a string like "Product: Rice, Price: $12"
// Test by creating a few products (e.g., Rice, Beans, Milk)

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    describe() {
        return `Product: ${this.name}, Price: $${this.price}`;
    }
}
const product1 = new Product("notebook", 1000);
const product2 = new Product("smartphone", 2000);
const product3 = new Product("tablet", 1500);

console.log(product1.describe()); // should return "Product: Rice, Price: $12"
console.log(product2.describe());

console.log(discount10(product1.price)); // should return 900

// --------------------------
// 3. Cart Class + Methods
// --------------------------
// Create a class Cart with:
// - property: products (array)
// - method: add(product) to add a Product
// - method: total() to return the sum of all product prices
// - method: showProducts() to return a string listing all products
// - method: applyDiscount() that applies the `discount10` function
//   to all products' prices using the function you created above

class Cart {
  products = [];

  add(product) {
    // implement
  }

  total() {
    // implement
  }

  showProducts() {
    // implement
  }

  applyDiscount() {
    // implement: use discount10 function for all products
  }
}

// --------------------------
// 4. Mini-Project Integration
// --------------------------
// Open index.html and, using ctrl+shift+P, type "Open with Live Server" to preview your shopping cart.
// You can also change the background color or alter the product list in the HTML file.
// Feel free to experiment with different styles and layouts, and also create new functions, buttons, or features!
