import Home from './pages/home';
import E404 from './pages/E404';
import Login from './pages/login';
import SignUp from './pages/signup';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  { path: '*', element: <E404 /> },
];

export default routes;
