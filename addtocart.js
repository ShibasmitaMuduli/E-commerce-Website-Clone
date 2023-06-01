/***Cart***/

if(document.readystate == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
}
else{
    ready();
}

//making function

function ready() {
    var removeFromCart = document.getElementsByClassName("cart-remove")
    console.log(removeFromCart)
    for(var i=0;i<removeFromCart.length;i++){
        var button = removeFromCart[i];
        button.addEventListener("click", removeFromCart);
    }

    //quantity changes

    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for(var i=0;i<quantityInputs.length;i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
    
    //add items to cart

    var addCart = document.getElementsByClassName("add-cart");
    for(var i=0;i<addCart.length;i++){
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
    
//buy button
document.getElementsByClassName("buy-btn")[0].addEventListener("click", buyButtonClicked);
}

//buy button

function buyButtonClicked() {
    alert("Your order is placed");
    var cartContent = document.getElementsByClassName("cart-content")[0]
    while(cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild); 
    }
    updateTotal();
}

//remove items from cart

function removeFromCart(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

//quantity changes

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
}

//add items to cart

function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title,price,productImg);
    updateTotal();
}

function addProductToCart(title,price,productImg) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add(".cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for(var i=0;i<cartItemsNames.length;i++){
        if(cartItemsNames[i].innerText == title) {
            alert("You have already added this item to the cart");
            return;
        }
    }
    var cartBoxContent = `
                        <div class="cart-box">
                            <img src=${productImg} class="cart-img">
                                <div class="detail-box">
                                <div class="cart-product-title">${title}</div>
                                <div class="cart-price">${price}</div>
                                <input type="number" value="1" class="cart-quantity">
                            </div>
                            <i class="fa-solid fa-trash cart-remove"></i>
                        </div>
                        `
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click",removeFromCart);
    cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change",quantityChanged);
}
//update total

function updateTotal() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total=0;
    for(var i=0;i<cartBoxes.length;i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("₹",""));
        var quantity = quantityElement.value;
        total=total+(price*quantity);
    }
    document.getElementsByClassName("total-price")[0].innerText = "₹" + total;
}