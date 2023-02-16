import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import WorkInProgressPage from './pages/WorkInProgressPage';
import ProductsPage from './pages/ProductsPage';
import CompanyCulturePage from './pages/CompanyCulturePage';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/companyculture" element={<CompanyCulturePage />} />
        <Route path="/contact-us" element={<WorkInProgressPage />} />
        <Route element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
