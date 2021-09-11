import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import WorkInProgressPage from './pages/WorkInProgressPage';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/products" component={WorkInProgressPage} />
        <Route path="/partners" component={WorkInProgressPage} />
        <Route path="/contact-us" component={WorkInProgressPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
