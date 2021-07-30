import List from '../views/pages/list';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import NotFound from '../views/pages/notfound';

const routes = {
  '/': List, // default page
  '/list': List,
  '/detail/:id': Detail,
  '/favorite': Favorite,
  '/404': NotFound,
};

export default routes;
