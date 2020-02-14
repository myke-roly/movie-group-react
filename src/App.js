import React from 'react';
import ListMovie from './components/ListMovie';
import Title from './components/Title';
import DetailMovie from './components/DetailMovie';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  const [current, setCurrent] = React.useState('');
  const getCurrent = (id) => {
    setCurrent(id);
  }

  return (
    <Router>
        <Switch>
          <Route path="/" exact>
            <Title title="Movie - React group" />
              <div className="container">
                <ListMovie getCurrent={getCurrent} />
              </div>
            </Route>
            <Route path='/detail-movie'>
                <DetailMovie current={current} />
            </Route>
        </Switch>
   </Router>
  );
}

export default App;
