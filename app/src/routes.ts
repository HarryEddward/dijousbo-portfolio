import { PageAbout } from './pages/About';
import {PageHome} from './pages/Home'
import { RouteConfig } from './types';

// Aquí definimos nuestras rutas y componentes
const routes: RouteConfig[] = [
  {
    path: '/',
    component: PageHome,
  },
  {
    path: '/about',
    component: PageAbout,
  },
];

export default routes;
