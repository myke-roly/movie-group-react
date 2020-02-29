import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Discover from './containers/Discover';
import DetailMovie from './components/DetailMovie';
import NotFound from './containers/NotFound';
import SearchMovie from './components/SearchMovie';
import Genres from './components/Genres';
//Context
import MoviesContext from './context/MoviesContext';
import CategoriesContext from './context/CategoriesContext';
import SearchContext from './context/SearchContext';

const App = () => {
  return (
    <MoviesContext>
      <CategoriesContext>
        <SearchContext>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Discover} />
              <Route path="/detail-movie/:id" component={DetailMovie} />
              <Route path="/search/:id" component={SearchMovie} />
              <Route path="/genres/:id" component={Genres} />
              <Route path="/404" component={NotFound} />
            </Switch>
          </BrowserRouter>
        </SearchContext>
      </CategoriesContext>
    </MoviesContext>
  );
};

export default App;
