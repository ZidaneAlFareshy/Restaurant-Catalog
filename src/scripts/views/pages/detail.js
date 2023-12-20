/* eslint-disable quotes */
import UrlParser from "../../routes/url-parser";
import RestoranSource from "../../data/restaurants-source";
import { createRestaurantDetailTemplate } from "../templates/template-creator";
import LikeButtonInitiator from "../../utils/like-button-initiator";

const MeDetail = {
  async render() {
    return `
    <style>
    picture img{
      display: none;
    }
    </style>
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestoranSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector("#restaurant");
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        description: restaurant.restaurant.description,
        pictureId: restaurant.restaurant.pictureId,
        rating: restaurant.restaurant.rating,
        city: restaurant.restaurant.city,
      },
    });
  },
};

export default MeDetail;
