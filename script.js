import { data } from "./data.js";

const filterButton = document.querySelector(".filter-button");
const modalFilter = document.querySelector(".modal-filter");
const sortButton = document.querySelectorAll(".sort-button");
const modalSort = document.querySelectorAll(".modal-sort");
let currentSortOrder, currentSortElement

filterButton.addEventListener("click", (event) => {
    event.preventDefault();
    modalFilter.classList.toggle("active");
    modalSort[0].classList.remove("active2");
});

sortButton[0].addEventListener("click", (event) => {
    event.preventDefault();
    modalSort[0].classList.toggle("active2");
    modalFilter.classList.remove("active");
});

function createRestaurantsArticles(restaurant) {
    const restaurantsSection = document.querySelector(".restaurants-section");
    const article = document.createElement("article");
    const imageElement = document.createElement("img");
    const nameElement = document.createElement("h2");
    const containerName = document.createElement("div");

    article.classList.add("restaurants-article");
    article.classList.add("all-restaurants");
    imageElement.classList.add("image-restaurants-article");
    nameElement.classList.add("name-restaurants-article");
    containerName.classList.add("container-name-restaurants-article");

    imageElement.src = restaurant.image;
    nameElement.innerHTML = restaurant.name;
    article.setAttribute("index", restaurant.index);

    containerName.appendChild(nameElement);
    article.appendChild(imageElement);
    article.appendChild(containerName);
    restaurantsSection.appendChild(article);
}
function createPromo(restaurant) {
    const backCarousel = document.createElement("img");
    const H2carousel = document.createElement("h2");
    const promoSection = document.querySelector(".promo-section");
    const promoItems = document.createElement("div");
	const imgpromo = document.createElement("img");

    promoItems.classList.add("promo-items");
    promoItems.classList.add("all-restaurants");
    H2carousel.classList.add("h2-carousel");
    backCarousel.classList.add("img-carousel");
	imgpromo.classList.add("imgpromo");

    backCarousel.src = restaurant.image;
    H2carousel.innerHTML = restaurant.name;
    promoItems.setAttribute("index", restaurant.index);
	imgpromo.src = "./image/promo.png";

    promoItems.appendChild(backCarousel);
    promoItems.appendChild(H2carousel);
    promoSection.appendChild(promoItems);
	promoItems.appendChild(imgpromo);
}

function createModal(element){
    const transparentPage = document.querySelector(".transparent-page");

    const modalPage = document.createElement("article");
    const allElement = document.createElement("section");
    const photoSection = document.createElement("section");
    const pageImage = document.createElement("img");
    const restaurantTitle = document.createElement("h2");
    const measureSection = document.createElement("section");
    const price = document.createElement("p");
    const rating = document.createElement("img");
    const scheduleSection = document.createElement("section");
    const scheduleImage = document.createElement("img");
    const pageList = document.createElement("ul");
    const deliverySection = document.createElement("section");
    const truck = document.createElement("img");
    const deliveryList = document.createElement("ul");
    const menuSection = document.createElement("section");
    const menuLogo = document.createElement("img");
    const menuLink = document.createElement("a");
    
    modalPage.classList.add("modal-page");
    allElement.classList.add("all-elements-modal");
    photoSection.classList.add("photo-section");
    pageImage.classList.add("modal-page-image");
    restaurantTitle.classList.add("restaurant-title");
    measureSection.classList.add("measure-section");
    price.classList.add("price");
    rating.classList.add("rating");
    scheduleSection.classList.add("schedule-section");
    scheduleImage.classList.add("modal-schedule-image");
    pageList.classList.add("modal-page-list");
    deliverySection.classList.add("delivery-section");
    truck.classList.add("truck");
    deliveryList.classList.add("modal-delivery-list");
    menuSection.classList.add("menu-section");
    menuLogo.classList.add("menu-logo");
    menuLink.classList.add("modal-menu-link");
    
    pageImage.src = element.image;
    restaurantTitle.innerHTML = element.name;
    price.innerHTML = element.price;
    rating.innerHTML = element.rating;
    scheduleImage.src = "./image/horaire.png";
    truck.src = "./image/truck.png";
    menuLogo.src = "./image/logomenu.png";
    menuLink.innerHTML = element.url;
    
    photoSection.appendChild(pageImage);
    photoSection.appendChild(restaurantTitle);
    measureSection.appendChild(price);
    measureSection.appendChild(rating);
    scheduleSection.appendChild(scheduleImage);
    for (let hour of element.openingHours){
        const schedule = document.createElement("li");
        schedule.classList.add("schedule");
        schedule.innerHTML = hour;
        pageList.appendChild(schedule);   
    }
    scheduleSection.appendChild(pageList);
    console.log(pageList);
    
    deliverySection.appendChild(truck);
    
    for(let order of element.delivery){
        const delivery = document.createElement("li");
        delivery.classList.add("delivery");
        delivery.innerHTML = order;
        deliveryList.appendChild(delivery);
    }

    deliverySection.appendChild(deliveryList);
    menuSection.appendChild(menuLogo);
    menuSection.appendChild(menuLink);

    allElement.appendChild(photoSection);
    allElement.appendChild(measureSection);
    allElement.appendChild(scheduleSection);
    allElement.appendChild(deliverySection);
    allElement.appendChild(menuSection);

    modalPage.appendChild(allElement);
    transparentPage.insertBefore(modalPage, transparentPage.firstChild);
}



function trie(ordre, element, array) {
    return array.sort((a, b) => {
        if (element === 'price') {
            if (ordre === 'croissant') {
                return a.price.length - b.price.length
            } else {
                return b.price.length - a.price.length
            }
        } else if (element === 'note') {
            return b.rating - a.rating
        } else if (element === 'distance') {
            return a.distance - b.distance
        } else if (element === 'pertinence') {
            return a.index - b.index
        }
    });

}

function filterAndDisplayRestaurants() {
    const selectedFilters = Array.from(checkbox).filter(check => check.checked).map(check => check.value);
    
    let filteredRestaurants = data;
    
    if (selectedFilters.length === 0) {
        data.forEach(restaurant => createRestaurantsArticles(restaurant));
    } else {
        filteredRestaurants = data.filter(restaurant => 
            selectedFilters.some(filter => restaurant.filter.includes(filter))
        );
        filteredRestaurants.forEach(restaurant => createRestaurantsArticles(restaurant));
    }
    
    filteredRestaurants = trie(currentSortOrder, currentSortElement, filteredRestaurants);
    
    restaurantsSection.innerHTML = '';
    filteredRestaurants.forEach(restaurant => createRestaurantsArticles(restaurant));
}

const restaurantsSection = document.querySelector(".restaurants-section");
const liSort = document.querySelectorAll('.sort-selection')
const checkbox = document.querySelectorAll('.checkbox')

data.forEach((restaurant) => createRestaurantsArticles(restaurant));

liSort.forEach(li => {
    li.addEventListener('click', (event) => {
        const i = event.target.attributes.value.value;
        if (i === 'prix croissant') {
            currentSortOrder = 'croissant';
            currentSortElement = 'price';
        } else if (i === 'prix decroissant') {
            currentSortOrder = 'decroissant';
            currentSortElement = 'price';
        } else if (i === 'notes') {
            currentSortElement = 'note';
        } else if (i === 'distance') {
            currentSortElement = 'distance'
        } else if (i === 'pertinence') {
            currentSortElement = 'pertinence'
        }
        filterAndDisplayRestaurants();
    });
});

checkbox.forEach((check) => {
	check.addEventListener("change", filterAndDisplayRestaurants);
});


data.forEach((restaurant) => {
    if (restaurant.discount) {
        createPromo(restaurant);
    }
});

const allRestaurants = document.querySelectorAll('.all-restaurants');

allRestaurants.forEach(restaurant =>{
    restaurant.addEventListener('click', () => {
        const index = restaurant.getAttribute('index')
        createModal(data[index - 1])
        
    })
})
