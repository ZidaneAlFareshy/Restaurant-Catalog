import RestaurantList from '../views/pages/home';
import Detail from '../views/pages/detail';
import Like from '../views/pages/favorite';

const routes = {
  '/': RestaurantList,
  '/home': RestaurantList,
  '/detail/:id': Detail,
  '/favorite': Like,
};

export default routes;
