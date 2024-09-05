// script.js

// products data
const products = [
    { id: 1, name: "Product 1", price: 10.99 },
    { id: 2, name: "Product 2", price: 9.99 },
    { id: 3, name: "Product 3", price: 12.99 },
    { id: 4, name: "Product 4", price: 8.99 },
    { id: 5, name: "Product 5", price: 15.99 }
];

// cart data
let cart = [];

// display products
const productList = document.getElementById("product-list");
products.forEach((product) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${product.name} - $${product.price}`;
    listItem.addEventListener("click", () => {
        addToCart(product);
    });
    productList.appendChild(listItem);
});

// add to cart function
function addToCart(product) {
    cart.push(product);
    updateCart();
}

// update cart function
function updateCart() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = "";
    cart.forEach((product) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${product.name} - $${product.price}`;
        cartList.appendChild(listItem);
    });
    const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);
    document.getElementById("total-price").textContent = `$${totalPrice.toFixed(2)}`;
}

// checkout button event listener
document.getElementById("checkout-btn").addEventListener("click", () => {
    alert("Checkout successful!");
    cart = [];
    updateCart();