const cars = [ 
    {
        name: "Tesla Model 3",
        type: "Cars & Minivan",
        year: 2023,
        modul: "LC76",
        fuel: "Petrol",
        price: 36620,
        used: true,
        image: "photos/Tesla.png"
    },
    {
        name: "Ford F-150",
        type: "Trucks",
        year: 2021,
        modul: "XL",
        fuel: "Diesel",
        price: 28500,
        used: false,
        image: "photos/Ford150.png"
    },
    {
        name: "Toyota Highlander",
        type: "Crossovers & SUVs",
        year: 2022,
        modul: "SE",
        fuel: "Hybrid",
        price: 42000,
        used: false,
        image: "photos/Toyota.png"
    },
    {
        name: "Chevrolet Bolt",
        type: "Electrified",
        year: 2023,
        modul: "EV",
        fuel: "Electric",
        price: 31000,
        used: true,
        image: "photos/chevroletBolt.png"
    },
]

function filterCarsByCategory(category){
    if(category === "All"){
        return cars;
    }

    return cars.filter(car => car.type === category);
}

function displayCars(carList){
    const container = document.querySelector(".card-container");
    container.innerHTML = "";

    carList.forEach(car => {
        const carCard = document.createElement("div");
        carCard.classList.add("card");

        carCard.innerHTML = `
        <div class="card-header">
                    <h3>${car.name}</h3>
                    <p>${car.used ? "Used": "New"}</p>
                </div>
                <div class="card-content">
                    <div class="image">
                        <img src=${car.image} alt="${car.name}">
                    </div>
                    <ul>
                        <li><span>Model Year: </span> ${car.year}</li>
                        <li><span>Model: </span> ${car.modul}</li>
                        <li><span>Fuel: </span> ${car.fuel}</li>
                    </ul>
                    <h3 class="price">$ ${car.price}</h3>
                    <a href="shop.html">
                        <button title="button" class="order-btn">Order Now <span><i class="fa-solid fa-chevron-right"></i></span></button>
                    </a>
                </div>
        `

        carCard.classList.add("card-fade-in");
        container.appendChild(carCard);
    })
}

document.querySelectorAll(".category").forEach(button => {
    button.addEventListener("click", event => {
        document.querySelectorAll(".category").forEach(btn => btn.classList.remove("active"));
        event.target.classList.add("active");

        const selectedCategory = event.target.textContent;
        const filteredCars = filterCarsByCategory(selectedCategory);
        displayCars(filteredCars);
    
    })
})

document.addEventListener("DOMContentLoaded", displayCars(cars))