import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StoreProvider, store } from './stores';
import { routes } from './constants/Routes';
import { MainPage } from './pages/MainPage';
import { ErrorPage } from './pages/ErrorPage';
import { ProductsPage } from './pages/ProductsPage';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { NavBar } from './components/NavBar';
import './scss/main.scss';

export const App = () => {
  return (
    <StoreProvider value={store}>
      <Router>
        <ErrorBoundary>
          <NavBar />
          <Switch>
            <Route exact path={routes.Home} component={MainPage} />
            <Route exact path={routes.Products} component={ProductsPage} />
            <Route component={ErrorPage} />
          </Switch>
        </ErrorBoundary>
      </Router>
    </StoreProvider>
  );
};
