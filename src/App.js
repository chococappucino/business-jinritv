import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import WorkInProgressPage from './pages/WorkInProgressPage';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/products" element={<WorkInProgressPage />} />
        <Route path="/partners" element={<WorkInProgressPage />} />
        <Route path="/contact-us" element={<WorkInProgressPage />} />
        <Route element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
