var cartElement = document.querySelector("#cart");
var totalPriceElement = document.querySelector("#total-price");
var addToCartButtons = document.querySelectorAll(".add-to-cart");
var cartItems = [];
var totalPrice = 0;



addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        var product = this.getAttribute("data-product");
        var price = +(this.getAttribute("data-price"));
        cartItems.push(product);
        totalPrice += price;
        updateCart();
        showFeedback("Product added to cart");
    });
});

var clearCartButton = document.querySelector(".clear-cart");
clearCartButton.addEventListener("click", function () {
    clearCart();
    showFeedback("Cart cleared");
});

function updateCart() {
    var cartElement = document.querySelector("#cart");
    var totalPriceElement = document.querySelector("#total-price");

    cartElement.innerHTML = "";

    for (var i = 0; i < cartItems.length; i++) {
        var item = document.createElement("div");
        item.textContent = cartItems[i];
        cartElement.appendChild(item);
    }

    /////////////////////////////////
    totalPriceElement.textContent = totalPrice.toFixed(2);
}


function clearCart() {
    cartItems = [];
    totalPrice = 0;
    updateCart();
}

function showFeedback(message) {
    var feedbackElement = document.querySelector("#feedback");
    feedbackElement.textContent = message;
    feedbackElement.style.display = "block";
    setTimeout(function() {
        feedbackElement.style.display = "none";
      }, 1000);
};


