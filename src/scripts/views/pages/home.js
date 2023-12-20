/* eslint-disable quotes */
import RestoranSource from "../../data/restaurants-source";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const ListResto = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Explore Restaurant</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestoranSource.restaurantList();
    const restaurantContainer = document.querySelector("#restaurants");
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default ListResto;
