import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import NotFound from './pages/Notfound';
import Testing from './pages/Testing';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Do from './pages/Do';
import OnePage from './pages/OnePage';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/one-page"
        element={<OnePage />}
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
        path="/portfolio"
        element={<Portfolio />}
      />
      <Route
        path="/about"
        element={<About />}
      />
      <Route
        path="/what-can-i-do"
        element={<Do />}
      />
      <Route
        path="/contact"
        element={<Contact />}
      />
    </Routes>
  </BrowserRouter>
);
