const carData = [
    { id: 1, brand: "Tesla", model: "Cars & Minivan", price: 36620, imageUrl: "photos/Tesla.png" },
    { id: 2, brand: "Ford F-150", model: "Trucks", price: 28500, imageUrl: "photos/Ford150.png" },
    { id: 3, brand: "Toyota", model: "Crossovers", price: 42000, imageUrl: "photos/Toyota.png" },
    { id: 4, brand: "Chevrolet", model: "Electrified", price: 31000, imageUrl: "photos/chevroletBolt.png" },
    // Add more cars...
];

// Function to update car items based on selected filters
function updateCarItems() {
    const brandFilter = document.getElementById('filters').value;
    const priceMin = parseInt(document.getElementById('price-min').value) || 0;
    const priceMax = parseInt(document.getElementById('price-max').value) || Infinity;

    const carItemsContainer = document.getElementById('car-items');
    carItemsContainer.innerHTML = ''; // Clear previous items

    const filteredCars = carData.filter(car => {
        const matchesBrand = brandFilter === 'all' || car.brand === brandFilter;
        const matchesPrice = car.price >= priceMin && car.price <= priceMax;
        return matchesBrand && matchesPrice;
    });

    filteredCars.forEach(car => {
        const carItem = document.createElement('li');
        carItem.classList.add('car-item');
        carItem.innerHTML = `
            <span><img src="${car.imageUrl}" alt="${car.model}" width="124" height="82"></span>
            <span>${car.brand}</span>
            <span>${car.model}</span>
            <span>$${car.price.toLocaleString()}</span>
            <button class="add-to-cart" data-id="${car.id}">Add to Cart</button>
        `;
        carItemsContainer.appendChild(carItem);
    });

    // If no cars match, show a message
    if (filteredCars.length === 0) {
        carItemsContainer.innerHTML = '<li>No cars found matching your criteria.</li>';
    }

    // Add event listeners to "Add to Cart" buttons after the cars are rendered
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const carId = parseInt(this.dataset.id);
            const carToAdd = carData.find(car => car.id === carId); // Find the car by ID
            addToCart(carToAdd);  // Add to the shared cart system
        });
    });
}

// Initialize the car items on page load
document.addEventListener('DOMContentLoaded', updateCarItems);