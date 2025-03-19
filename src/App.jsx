import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import E404 from './pages/E404';
import Login from './pages/login';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<E404 />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
