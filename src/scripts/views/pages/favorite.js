/* eslint-disable quotes */
import FavResto from "../../data/favorite-restaurant";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Like = {
  async render() {
    return `
    <style>
    picture img{
      display: none;
    }
    #restaurant.restaurantIsEmpty {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      justify-content: center;
    }
    
    .restaurant-item {
      width: 400px;
    }
    </style>
      <div class="content">
        <h2 class="content__heading">Favorite Restaurant</h2>
        <div id="restaurant" class="restaurantIsEmpty">
          Restaurant tidak ditemukan!
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavResto.getAllRestaurant();
    const restaurantsContainer = document.querySelector("#restaurant");
    if (restaurants.length > 0) {
      restaurantsContainer.innerHTML = "";
    } else {
      restaurantsContainer.innerHTML = "<p>Restaurant tidak ditemukan!</p>";
    }
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Like;
