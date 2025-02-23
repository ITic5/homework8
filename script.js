//Exercises from lesson

//Exercise 1
let products = document.querySelectorAll(".product");
for (let p of products) {
    p.style.color = "#383735";
}

//Exercise 2
let price = document.querySelectorAll(".productPrice");
for (let p of price) {
    if (p.innerText > 10000) {
        p.style.color = "#c90000";
    } else if (p.innerText > 5000) {
        p.style.color = "#ed4e66";
    } else {
        p.style.color = "#0099ff";
    }
}

//Exercise 3
let cars = [
    {
        name: "Tesla Model S",
        price: "$89,990",
        img: "https://shorturl.at/Ol9Pg",
        year: 2025
    },
    {
        name: "BMW M4",
        price: "$77,500",
        img: "https://shorturl.at/dfM8u",
        year: 2020
    },
    {
        name: "Audi R8",
        price: "$158,600",
        img: "https://shorturl.at/hJ5DF",
        year: 2025
    },
    {
        name: "Mercedes-Benz G63 AMG",
        price: "$179,000",
        img: "https://shorturl.at/yTXuV",
        year: 2022
    },
    {
        name: "Porsche 911 Carrera",
        price: "$106,100",
        img: "https://rb.gy/ext3ld",
        year: 2024
    },
    {
        name: "Ford Mustang GT",
        price: "$43,000",
        img: "https://rb.gy/v1yejx",
        year: 2025
    },
    {
        name: "Chevrolet Corvette",
        price: "$66,300",
        img: "https://rb.gy/gmvrnb",
        year: 2023
    },
    {
        name: "Lamborghini Huracan",
        price: "$248,295",
        img: "https://rb.gy/o77npt",
        year: 2021
    }
];
let carsContainer = document.querySelector("#cars-container");
carsContainer.style.display = "grid";
carsContainer.style.gridTemplateColumns = "repeat(4, 1fr)";
carsContainer.style.gridTemplateRows = "repeat(2, auto)";
carsContainer.style.gap = "20px";

for (let car of cars) {
    let carDiv = document.createElement("div");
    carDiv.style.display = "flex";
    carDiv.style.flexDirection = "column";
    carDiv.style.justifyContent = "space-between";
    carDiv.style.backgroundColor = "#d5e1f5";
    carDiv.style.padding = "10px";
    carDiv.style.borderRadius = "5px";
    carDiv.style.position = "relative";

    let carName = document.createElement("h2");
    carName.innerText = car.name + " ";
    carName.style.marginTop = "0";

    let carPrice = document.createElement("span");
    carPrice.innerText = car.price;
    carPrice.style.color = "#fcba03";

    let carImg = document.createElement("img");
    carImg.src = car.img;
    carImg.style.maxWidth = "100%";

    let carYear = document.createElement("h3");
    if(car.year === 2025){
        carYear.innerText = "NEW";
    }else{
        carYear.innerText = car.year;
    }
    carYear.style.color = "#545454";
    carYear.style.backgroundColor = "#fff";
    carYear.style.position = "absolute";
    carYear.style.margin = "0";
    carYear.style.right = "10px";
    carYear.style.bottom = "10px";

    document.querySelector("#cars-container").appendChild(carDiv);
    carDiv.appendChild(carName);
    carName.appendChild(carPrice);
    carDiv.appendChild(carImg);
    carDiv.appendChild(carYear);
}