import product0 from "../images/beefsteak.png";
import product1 from "../images/chickenthigh.png";
import product2 from "../images/apples.png";
import product3 from "../images/watermulon.png";
import product4 from "../images/beefmince.png";
import product5 from "../images/beefsausages.png";
import product6 from "../images/lambmince.png";
import product7 from "../images/chickendrumstick.png";
import product8 from "../images/bananas.png";
import product9 from "../images/pears.png";
import product10 from "../images/babyspinach.png";
import product11 from "../images/carrots.png";
import product12 from "../images/zucchini.png";
import product13 from "../images/broccoli.png";

const PRODUCTS_KEY = "products";

function initProducts() {   // Init in index.js
    const products = [
        {
            productID: "0", 
            productName: "Beef Rump Steak (300g)",
            productPrice: "9.75",
            productImage: product0,
        },
        {
            productID: "1", 
            productName: "Chicken Thigh (450g)",
            productPrice: "15.07",
            productImage: product1,
        },
        {
            productID: "2", 
            productName: "Apples",
            productPrice: "7.80",
            productImage: product2,
        },
        {
            productID: "3", 
            productName: "Mini Melon",
            productPrice: "8.10",
            productImage: product3,
        },
        {
            productID: "4", 
            productName: "Extra Lean Beef Mince (500g)",
            productPrice: "15.00",
            productImage: product4,
        },
        {
            productID: "5", 
            productName: "Beef Sausages Gluten Free (450g)",
            productPrice: "10.50",
            productImage: product5,
        },
        {
            productID: "6", 
            productName: "Lamb Mince (500g)",
            productPrice: "10.00",
            productImage: product6,
        },
        {
            productID: "7", 
            productName: "Chicken Drumsticks (420g)",
            productPrice: "4.20",
            productImage: product7,
        },
        {
            productID: "8", 
            productName: "Bananas",
            productPrice: "1.02",
            productImage: product8,
        },
        {
            productID: "9", 
            productName: "Pears",
            productPrice: "5.90",
            productImage: product9,
        },
        {
            productID: "10", 
            productName: "Baby Spinach",
            productPrice: "4.80",
            productImage: product10,
        },
        {
            productID: "11", 
            productName: "Carrots",
            productPrice: "5.80",
            productImage: product11,
        },
        {
            productID: "12", 
            productName: "Zucchini",
            productPrice: "5.50",
            productImage: product12,
        },
        {
            productID: "13", 
            productName: "Broccoli",
            productPrice: "9.90",
            productImage: product13,
        },
    ]
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
}

function getProducts() {
    // Extract product data from local storage.
    const data = localStorage.getItem(PRODUCTS_KEY);
    // console.log(data);   // Display in console to see if the data exists/is correct
    // Convert data to objects.
    return JSON.parse(data);
}

function getProduct(id) {
    const products = getProducts(); 
    for (const product of products) {
        if (id === product.productID) {
            return product
        }
    }
    // return null
}

export {
    initProducts, 
    getProducts, 
    getProduct 
}