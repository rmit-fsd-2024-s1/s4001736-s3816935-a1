const PRODUCTS_KEY = "products";

function initProducts() {
    const products = [
        {
            productID: "0", 
            productName: "Extra Lean Beef Mince (500g)",
            productPrice: "15.00",
            productImage: "../images/beefmince.png",
        },
        {
            productID: "1", 
            productName: "Beef Rump Steak (300g)",
            productPrice: "9.75",
            productImage: "",
        },
        {
            productID: "2", 
            productName: "Beef Sausages Gluten Free (450g)",
            productPrice: "10.50",
            productImage: "",
        },
        {
            productID: "3", 
            productName: "Lamb Mince (500g)",
            productPrice: "10.00",
            productImage: "",
        },
        {
            productID: "4", 
            productName: "Chicken Thigh (450g)",
            productPrice: "15.07",
            productImage: "",
        },
        {
            productID: "5", 
            productName: "Chicken Drumsticks (420g)",
            productPrice: "4.20",
            productImage: "",
        },
        {
            productID: "6", 
            productName: "Apples",
            productPrice: "7.80",
            productImage: "",
        },
        {
            productID: "7", 
            productName: "Bananas",
            productPrice: "1.02",
            productImage: "",
        },
        {
            productID: "8", 
            productName: "Mini Melon",
            productPrice: "8.10",
            productImage: "",
        },
        {
            productID: "9", 
            productName: "Pears",
            productPrice: "5.90",
            productImage: "",
        },
        {
            productID: "10", 
            productName: "Baby Spinach",
            productPrice: "4.80",
            productImage: "",
        },
        {
            productID: "11", 
            productName: "Carrots",
            productPrice: "5.80",
            productImage: "",
        },
        {
            productID: "12", 
            productName: "Zucchini",
            productPrice: "5.50",
            productImage: "",
        },
        {
            productID: "13", 
            productName: "Broccoli",
            productPrice: "9.90",
            productImage: "",
        },
        {
            productID: "14", 
            productName: "",
            productPrice: "",
            productImage: "",
        },
        {
            productID: "15", 
            productName: "",
            productPrice: "",
            productImage: "",
        },
    ]
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
}

function getProducts() {
    // Extract product data from local storage.
    const data = localStorage.getItem(PRODUCTS_KEY);
    console.log(data);   // Display in console to see if the data exists/is correct
    // Convert data to objects.
    return JSON.parse(data);
  }

export {
    initProducts, 
    getProducts
}