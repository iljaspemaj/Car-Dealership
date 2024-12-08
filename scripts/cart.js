let cart = [];  
function addToCart(car) {
    cart.push(car);  
    updateCartUI();  
}

function removeFromCart(carId) {
    cart = cart.filter(car => car.id !== carId);
    updateCartUI();
}

function calculateTotal() {
    return cart.reduce((total, car) => total + car.price, 0);
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    
    cartItemsContainer.innerHTML = '';
    
    cart.forEach(car => {
        const cartItem = document.createElement('li');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span><img src="${car.imageUrl}" alt="${car.model}" width="124" height="82"></span>
            <span>${car.brand}</span>
            <span>${car.model}</span>
            <span>$${car.price.toLocaleString()}</span>
            <button class="remove-from-cart" onclick="removeFromCart(${car.id})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    const totalPrice = calculateTotal();
    totalPriceElement.textContent = totalPrice.toFixed(2);  
}


function handleSell() {
    if (cart.length === 0) {
        alert('The Cart is Empty! Please add to cart.');
        return;
    }
    openPaymentModal(); 
}

function openPaymentModal() {
    const paymentSection = document.querySelector('.payment-section');
    paymentSection.style.display = 'block'; // Show the modal
}


function closeModal() {
    const paymentSection = document.querySelector('.payment-section');
    paymentSection.style.display = 'none'; // Hide the modal
}

function confirmPayment() {
    alert('Confirming payment...');
    closeModal();
    showPaymentSuccess();
}

function showPaymentSuccess() {
    const paymentSuccessSection = document.querySelector('.payment-success-section');
    paymentSuccessSection.style.display = 'flex'; 
    setTimeout(() => {
        paymentSuccessSection.style.display = 'none'; 
    }, 3000);
}
function handleCancel() {
    cart = []; // Clear the cart
    updateCartUI(); // Update the UI to reflect the empty cart
}
updateCartUI();

document.getElementById('cancel-button').addEventListener('click', handleCancel);
document.getElementById('sell-button').addEventListener('click', handleSell);