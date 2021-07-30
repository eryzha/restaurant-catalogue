/* eslint-disable max-len */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
  <h3>Information</h3>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>Menu Categories</h4>
    <p>${restaurant.categories[0].name} (${restaurant.categories[1].name})</p>
    <h4>Rating</h4>
    <p>⭐️<span class="restaurant-item__header__rating__score"> ${restaurant.rating} </span></p>
  </div>
  <div class="restaurant__overview">
    <h4>Food Menus</h4>
    <p>${restaurant.menus.foods.map((menu) => `
    ${menu.name},
    `).join('')}</p>
    <h4>Drink Menus</h4>
    <p>${restaurant.menus.drinks.map((menu) => `
    ${menu.name},
    `).join('')}</p>
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant__overview">
    <h4>Customer Reviews</h4>
    <div>
    ${restaurant.customerReviews.map((review, index) => `
    <div class="restaurant-item" key=${index}>
    <h4>${review.name}</h4>
    <p>${review.date}</p>
    <p>${review.review}</p>
    </div>
    `).join('')}
    </div>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name}"
            data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
        <div class="restaurant-item__header__rating">
            <p>⭐️ ${restaurant.rating}</p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3 class="restaurant__title"><a class="restaurant-item_link" href="${`/#/detail/${restaurant.id}`}"><h3>${restaurant.name}</h3></a></h3>
        <h4>${restaurant.city}</h4>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

// eslint-disable-next-line max-len
export {
  createRestaurantItemTemplate, createRestaurantDetailTemplate, createLikeButtonTemplate, createLikedButtonTemplate,
};
