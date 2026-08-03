const menu = document.getElementById("menu")
const cartModal = document.getElementById("cart-modal")
const cartBtn = document.getElementById("cart-btn")
const cartItemsContainer = document.getElementById("cart-items")
const cartTotal = document.getElementById("cart-total")
const checkoutBtn = document.getElementById("checkout-btn")
const closeModalBtn = document.getElementById("close-modal-btn")
const cartCounter = document.getElementById("cart-count")
const address = document.getElementById("address")
const addressWarn = document.getElementById("address-warn")
const number = document.getElementById("number")
const numberWarn = document.getElementById("number-warn")



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
        addToCart(nameProduct, priceProduct)
    }

  
})


function addToCart(name, price){
    const existingItem = cart.find(item => item.name === name)
    if(existingItem){
        existingItem.quantity += 1;
        updateCartModal()
        return;
    }
    cart.push({
        name,
        price, 
        quantity: 1,
    })
    updateCartModal()

}


function updateCartModal(){
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const cartItemElement = document.createElement("div");
        cartItemElement.classList.add("mb-4");

        cartItemElement.innerHTML = `
        
            <div class="flex items-center justify-between">
                <div>
                    <p class="font-medium">${item.name}</p>
                    <p>Quantidade: ${item.quantity}</p>
                    <p class="font-medium mt-2">R$ ${item.price.toFixed(2)}</p>
                </div>
                
                <button class="bg-red-500 text-white font-bold rounded py-1 px-4 remove-from-cart-btn" data-name="${item.name}">
                    Remover
                </button>
            </div>        
        
        `
        total += item.quantity * item.price;

        cartItemsContainer.appendChild(cartItemElement);
    })

    cartTotal.textContent = total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });


    cartCounter.innerHTML = cart.length;
}


cartItemsContainer.addEventListener("click", function(event){
    if(event.target.classList.contains("remove-from-cart-btn")){
        const name = event.target.getAttribute("data-name")
        console.log(name)
        removeItemCart(name);        
    }
})

function removeItemCart(name){
    console.log("Parâmetro", name);

    cart.forEach(item => {
        console.log("Item: ", item.name);
    });

    const indexItem = cart.findIndex(item => item.name === name);
    if(indexItem === -1){
        alert("Item não econtrado, impossível realizar a remoção")
        return;
    } 

    const item = cart[indexItem];
    
    if(item.quantity > 1){
        item.quantity -=1;
        updateCartModal();
        return;
    }

    cart.splice(indexItem, 1);
    updateCartModal();
}




address.addEventListener("input", function(event){
    inputAddressValue = event.target.value;
    if(inputAddressValue !== ""){
        address.classList.remove("border-red-500");
        addressWarn.classList.add("hidden");
    }


})


number.addEventListener("input", function(event){
    inputNumberValue = event.target.value;
    if(inputNumberValue !== ""){
        number.classList.remove("border-red-500");
        numberWarn.classList.add("hidden");
    }
    

})


checkoutBtn.addEventListener("click", function(){
    if(cart.length === 0) return;
    
    if(address.value === ""){
        addressWarn.classList.remove("hidden");
        address.classList.add("border-red-500");
        return;
    }
    if(number.value === ""){
        numberWarn.classList.remove("hidden");
        number.classList.add("border-red-500");
        return;
    }
})