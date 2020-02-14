import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Title from './components/Title';
import ListMovie from './components/ListMovie';
import DetailMovie from './components/DetailMovie';

const App = () => {
  const [current, setCurrent] = React.useState('');
  const getCurrent = id => {
    setCurrent(id);
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Title title="Movie - React group" />
          <div className="container">
            <ListMovie getCurrent={getCurrent} />
          </div>
        </Route>
        <Route path="/detail-movie">
          <DetailMovie current={current} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
