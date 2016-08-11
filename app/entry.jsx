import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app.jsx';
import Editor from './editor.jsx';
import Previewer from './previewer.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

const router = <Router history={hashHistory}>
  <Route path='/' component={App}>
    <IndexRoute component={Editor} />
  	<Route path='editor' component={Editor} />
  	<Route path='previewer' component={Previewer} />
  </Route>
</Router>;

ReactDOM.render(
  router,
  document.getElementById('content')
);
