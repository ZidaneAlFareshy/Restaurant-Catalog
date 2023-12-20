
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Restaurant tidak ditemukan!', '.restaurantIsEmpty p');

  I.amOnPage('/');

  I.seeElement('.restaurant_name a');

  const firstRestaurant = locate('.restaurant_name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');

  const likedRestaurantName = await I.grabTextFrom('.restaurant_name');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Restaurant tidak ditemukan!', '.restaurantIsEmpty p');

  I.amOnPage('/');

  I.seeElement('.restaurant_name a');

  const firstRestaurant = locate('.restaurant_name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');

  const likedRestaurantName = await I.grabTextFrom('.restaurant_name');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.click(likedRestaurantName);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  const FavoriteRestaurantIsEmpty = await I.grabTextFrom(
    '.restaurantIsEmpty p'
  );
  assert.strictEqual('Restaurant tidak ditemukan!', FavoriteRestaurantIsEmpty);
});
