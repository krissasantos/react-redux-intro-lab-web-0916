import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore';
import { Provider } from 'react-redux'

import App from './App'

//add inital action below
const store = configureStore();

store.dispatch(getInventoryItems())

ReactDOM.render(

  <Provider store={store}>
    <App />
    
  </Provider>,
  document.getElementById('container')
);


