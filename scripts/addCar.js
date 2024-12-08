// Function to handle the "Add Vehicle" button click
document.getElementById('add-vehicle-button').addEventListener('click', function() {
    // Get the input values
    const mark = document.getElementById('mark').value.trim();
    const model = document.getElementById('model').value.trim();
    const price = parseFloat(document.getElementById('price').value.trim());
    const imageUrl = document.getElementById('image-url').value.trim();

    // Validate inputs
    if (!mark || !model || isNaN(price) || !imageUrl) {
        alert('Please fill out all fields correctly.');
        return;
    }

    // Create a new car object
    const newCar = {
        id: Date.now(), // Use a unique ID based on timestamp
        brand: mark,
        model: model,
        price: price,
        imageUrl: imageUrl
    };

    // Add the car to the cart
    addToCart(newCar);

    // Optionally, clear input fields
    document.getElementById('mark').value = '';
    document.getElementById('model').value = '';
    document.getElementById('price').value = '';
    document.getElementById('image-url').value = '';

    alert('Vehicle added to the cart successfully!');
});