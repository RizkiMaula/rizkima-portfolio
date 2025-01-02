import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import NotFound from './pages/Notfound';
import Testing from './pages/Testing';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="*"
        element={<NotFound />}
      />
      <Route
        path="/testing"
        element={<Testing />}
      />
      <Route
        path="/about"
        element={<About />}
      />
      <Route
        path="/contact"
        element={<Contact />}
      />
    </Routes>
  </BrowserRouter>
);
