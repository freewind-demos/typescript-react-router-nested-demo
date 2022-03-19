import {BrowserRouter} from "react-router-dom";
import {App} from './App';
import React from 'react';
import ReactDOM from 'react-dom';

const router = <BrowserRouter>
  <App/>
</BrowserRouter>;

ReactDOM.render(
  router,
  document.getElementById('root')
);
