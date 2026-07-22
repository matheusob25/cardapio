const menu = document.getElementById("menu")
const cartModal = document.getElementById("cart-modal")
const cartBtn = document.getElementById("cart-btn")
const cartItemsContainer = document.getElementById("cart-items")
const cartTotal = document.getElementById("cart-total")
const checkoutBtn = document.getElementById("checkout-btn")
const closeModalBtn = document.getElementById("close-modal-btn")
const cartCounter = document.getElementById("cart-count")
const address = document.getElementById("address")
const number = document.getElementById("number")



let cart = [];



cartBtn.addEventListener("click", function(){
    cartModal.style.display = "flex"
})

cartModal.addEventListener("click", function(event){
    if(event.target == cartModal){
        cartModal.style.display = "none";
    }
})


closeModalBtn.addEventListener("click", function(){
    cartModal.style.display = "none";
})


menu.addEventListener("click", function(event){
    // console.log(event)
    let parentButton = event.target.closest(".add-to-cart-btn")

    if(parentButton){
        const nameProduct = parentButton.getAttribute("data-name")
        const priceProduct = parseFloat(parentButton.getAttribute("data-price"))
        console.log(nameProduct)
        console.log(priceProduct)
        addToCart(nameProduct, priceProduct)
    }

  
})


function addToCart(name, price){
    const existingItem = cart.find(item => item.name === name)
    if(existingItem){
        existingItem.quantity += 1;
        return;
    }
    cart.push({
        name,
        price, 
        quantity: 1,
    })

}