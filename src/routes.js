import Home from './pages/home';
import E404 from './pages/E404';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/home', element: <Home /> },
  { path: '*', element: <E404 /> },
];

export default routes;
