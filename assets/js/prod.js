const products = document.querySelectorAll(".slider .product");
let counter = 0; // Initialize counter with 0

function left() {
    if (counter === 0) {
        counter = Math.floor(products.length / 3) - 1;
    } else {
        counter--;
    }
    scroll();
    console.log("Left button clicked.");

}

function right() {
    if (counter === Math.floor(products.length / 3) - 1) {
        counter = 0;
    } else {
        counter++;
    }
    scroll();
    console.log("Right button clicked.");

}

function scroll() {
    console.log("Scroll function called with counter =", counter);
    
    products.forEach(function (item) {
        item.style.transform = `translateX(-${counter * 1250}px)`;
        console.log("Transformed item: ", item);
    });
}
