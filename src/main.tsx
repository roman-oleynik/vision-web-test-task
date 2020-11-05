import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './app/containers/App';
import { store } from './app/store/store';

import 'normalize.css';
import { Provider } from 'react-redux';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route path="/" exact component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
