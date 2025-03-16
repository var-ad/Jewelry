import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import Store from './pages/store';
import Login from './pages/login';
import Signup from './pages/signup';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
