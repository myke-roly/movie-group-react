import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';

import Movies from './pages/Movies';
import Series from './pages/Series';
import Detail from './pages/Detail';
import Search from './pages/Search';
import Genres from './pages/Genres';
import NotFound from './containers/NotFound';

//Context
import { MoviesContext, SeriesContext, CategoriesContext } from 'state';

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
              <Route path="/" exact component={Movies} />
              <Route path="/series" component={Series} />
              <Route path="/detail/:id" component={Detail} />
              <Route path="/search/:id" component={Search} />
              <Route path="/genres/:id" component={Genres} />
              <Route path="*" component={() => <NotFound />} />
            </Switch>
          </CategoriesContext>
        </SeriesContext>
      </MoviesContext>
    </Router>
  );
};

export default App;
