import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListMovie from './components/ListMovie';
import DetailMovie from './components/DetailMovie';
import MoviesContext from './context/MoviesContext';
import Search from './components/Search';
import Container from './components/Container';

const App = () => {
  const [current, setCurrent] = React.useState('');
  const getCurrent = id => {
    setCurrent(id);
  };

  return (
    <MoviesContext>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Container>
              <Search />
              <ListMovie getCurrent={getCurrent} />
            </Container>
          </Route>
          <Route path="/detail-movie">
            <DetailMovie current={current} />
          </Route>
        </Switch>
      </Router>
    </MoviesContext>
  );
};

export default App;
