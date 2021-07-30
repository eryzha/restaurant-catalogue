import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const List = {
  async render() {
    return `
    <div>
    
    <div class="hero">
      <div class="container">
          <p class="hero_title">Savory Restaurants Catalogue</p>
          <p class="hero_subtitle">Find the best taste ever</p>
      </div>
    </div>
    <div class="content">
        <h2 class="content__heading">List Restaurants</h2>
        <div id="restaurants" class="restaurants">
        </div>
    </div>

    </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.homeRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default List;
