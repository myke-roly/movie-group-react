import React from 'react';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';

import Discover from './containers/Discover';
import DetailMovie from './components/DetailMovie';
import NotFound from './containers/NotFound';
import SearchMovie from './components/SearchMovie';
//Context
import MoviesContext from './context/MoviesContext';
import CategoriesContext from './context/CategoriesContext';
import SearchContext from './context/SearchContext';

const App = () => {
  const [current, setCurrent] = React.useState('');
  const getCurrent = id => {
    setCurrent(id);
  };

  return (
    <BrowserRouter>
      <Switch>
        <MoviesContext>
          <CategoriesContext>
            <SearchContext>
              <Route path="/" exact>
                <Discover getCurrent={getCurrent} />
              </Route>
              <Route path="/detail-movie/:id">
                <DetailMovie current={current} />
              </Route>
              <Route path="/search/:id">
                <SearchMovie getCurrent={getCurrent} />
              </Route>
              <Route path="/404" component={NotFound} />
            </SearchContext>
          </CategoriesContext>
        </MoviesContext>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
