import Home from './pages/home';
import Store from './pages/store';
import Login from './pages/login';
import Signup from './pages/signup';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/home', element: <Home /> },
  { path: '/store', element: <Store /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  // Add more routes as needed
];

export default routes;
