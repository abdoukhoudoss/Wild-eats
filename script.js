import data from './data.json' with {type: "json"};

const filterButton = document.querySelector(".filter-button")
const modalFilter = document.querySelector(".modal-filter")

filterButton.addEventListener('click', (a) => {
    a.preventDefault();
    modalFilter.classList.toggle("active")
})


function createRestaurantsArticles (restaurant) {
    const restaurantsSection = document.querySelector(".restaurants-section");
    const article = document.createElement("article");
    const imageElement = document.createElement('img');
    const nameElement = document.createElement("h2");

    article.classList.add("restaurants-article");
    imageElement.classList.add("image-restaurants-article");
    nameElement.classList.add("name-restaurants-article");

    imageElement.src = restaurant.image;
    nameElement.innerHTML = restaurant.name;

    article.appendChild(imageElement);
    article.appendChild(nameElement);
    restaurantsSection.appendChild(article);

}

data.forEach(restaurant => createRestaurantsArticles(restaurant));
