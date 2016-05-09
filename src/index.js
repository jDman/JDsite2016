import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import Portfolio from './components/ui/Portfolio';
import About from './components/ui/About';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

  ReactDOM.render((
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Portfolio } />
          <Route path="/about" component={ About } />
      </Route>
    </Router>
  ), document.getElementById('app'));
