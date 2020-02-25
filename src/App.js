import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListMovie from './components/ListMovie';
import DetailMovie from './components/DetailMovie';
import Container from './components/Container';
import Sidebar from './components/Sidebar';
import NotFound from './containers/NotFound';
//Context
import MoviesContext from './context/MoviesContext';
import CategoriesContext from './context/CategoriesContext';
import Header from './containers/Header';

const App = () => {
  const [current, setCurrent] = React.useState('');
  const getCurrent = id => {
    setCurrent(id);
  };

  return (
    <MoviesContext>
      <CategoriesContext>
        <Router>
          <Switch>
            <Route path="/" exact>
              <div className="content">
                <Container>
                  <Header />
                  <ListMovie getCurrent={getCurrent} />
                </Container>
                <Sidebar />
              </div>
            </Route>
            
            <Route path="/detail-movie">
              <DetailMovie current={current} />
            </Route>
            <Route path="/404">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </CategoriesContext>
    </MoviesContext>
  );
};

export default App;
