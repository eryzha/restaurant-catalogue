/* eslint-disable no-unreachable */
/* eslint-disable indent */
/* eslint-disable no-new */
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import FavoriteRestaurantSearchView from './liked-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from './liked-restaurants/favorite-restaurant-show-presenter';
// eslint-disable-next-line no-unused-vars
import FavoriteRestaurantSearchPresenter from './liked-restaurants/favorite-restaurant-search-presenter';

const view = new FavoriteRestaurantSearchView();

const Like = {
  async render() {
    return `
          <div class="content">
            <h2 class="content__heading">Your Favorite Restaurants</h2>
            <div id="restaurants" class="restaurants">
       
            </div>
          </div>
       `;
        return view.getTemplate();
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
    new FavoriteRestaurantSearchView({ view, favoriteRestaurants: FavoriteRestaurantIdb });
  },
};

export default Like;
