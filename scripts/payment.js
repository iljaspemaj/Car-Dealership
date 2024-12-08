function confirmPayment(event) {
    event.preventDefault(); // Ndalon dërgimin e formës

    const cardNumber = document.getElementById("card-number").value.trim();
    const expirationDate = document.getElementById("expiration-date").value.trim();
    const cvv = document.getElementById("cvv").value.trim();

    

    if (!cardNumber || !expirationDate || !cvv) {
        Toastify({
            text: "All fields are required!",
            duration: 3000,
            gravity: "top",
            position: "center",
            backgroundColor: "linear-gradient(to right, #FF5F6D, #ffc371)",
        }).showToast();
        return;
    }

    if (!/^\d{16,19}$/.test(cardNumber)) {
        Toastify({
            text: "Please enter a valid card number!",
            duration: 3000,
            gravity: "top",
            position: "center",
            backgroundColor: "linear-gradient(to right, #FF5F6D, #ffc371)",
        }).showToast();
        return;
    }

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expirationDate)) {
        Toastify({
            text: "Please enter a valid expiration date (MM/YY)!",
            duration: 3000,
            gravity: "top",
            position: "center",
            backgroundColor: "linear-gradient(to right, #FF5F6D, #ffc371)",
        }).showToast();
        return;
    }

    if (!/^\d{3,4}$/.test(cvv)) {
        Toastify({
            text: "Please enter a valid CVV!",
            duration: 3000,
            gravity: "top",
            position: "center",
            backgroundColor: "linear-gradient(to right, #FF5F6D, #ffc371)",
        }).showToast();
        return;
    }

    confirmPayment(cardNumber, expirationDate, cvv);
    
    function confirmPayment(cardNumber, expirationDate, cvv) {
        console.log("Payment confirmed:", { cardNumber, expirationDate, cvv });
        showPaymentSuccess();
    }

    function showPaymentSuccess() {
        const paymentSuccessSection = document.querySelector('.payment-success-section');
        paymentSuccessSection.style.display = 'flex'; // Show success message
    
        setTimeout(() => {
            paymentSuccessSection.style.display = 'none'; // Hide it after 3 seconds
        }, 3000);
    }
}