const filterButton = document.querySelector(".filter-button");
const modalFilter = document.querySelector(".modal-filter");

filterButton.addEventListener('click', (a) => {
    a.preventDefault();
    modalFilter.classList.toggle("active");
})

const fetchData = async () => {
    try {
        const response = await fetch("./data.json")
        const json = await response.json()
        return json
    } catch (error) {
        console.error(error.message);
    }
}

const charlotteDaBoss = async () => {
    const data = await fetchData()
    if (data) {
        createAllRestaurants(data)
    } else {
        console.log("Hahahaha t'as merdé");
        
    }
}

function createAllRestaurants(data) {
function createRestaurantsArticles (restaurant) {
    const restaurantsSection = document.querySelector(".restaurants-section");
    const article = document.createElement("article");
    const imageElement = document.createElement('img');
    const nameElement = document.createElement("h2");
    const containerName = document.createElement('div')

    article.classList.add("restaurants-article");
    imageElement.classList.add("image-restaurants-article");
    nameElement.classList.add("name-restaurants-article");
    containerName.classList.add("container-name-restaurants-article");

    imageElement.src = restaurant.image;
    nameElement.innerHTML = restaurant.name;

    containerName.appendChild(nameElement);
    article.appendChild(imageElement);
    article.appendChild(containerName);
    restaurantsSection.appendChild(article);
}

data.forEach(restaurant => createRestaurantsArticles(restaurant));
}

charlotteDaBoss()