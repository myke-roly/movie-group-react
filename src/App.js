import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';

import Discover from './containers/Discover';
import DetailMovie from './components/DetailMovie';
import NotFound from './containers/NotFound';
import SearchMovie from './components/SearchMovie';
import Genres from './components/Genres';
//Context
import MoviesContext from './context/MoviesContext';
import CategoriesContext from './context/CategoriesContext';
import Series from './components/Series';
import SeriesContext from './context/SeriesContext';

// react-ga
// ReactGA.initialize('UA-137885307-1');
// ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
  return (
    <Router history={history}>
      <MoviesContext>
        <SeriesContext>
          <CategoriesContext>
            <Switch>
              <Route path="/" exact component={Discover} />
              <Route path="/detail-movie/:id" component={DetailMovie} />
              <Route path="/search/:id" component={SearchMovie} />
              <Route path="/genres/:id" component={Genres} />
              <Route path="/series" component={Series} />
              <Route path="/404" component={() => <NotFound />} />
            </Switch>
          </CategoriesContext>
        </SeriesContext>
      </MoviesContext>
    </Router>
  );
};

export default App;
