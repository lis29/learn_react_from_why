import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { storeContext as StoreContext } from './util/context'
import store from './store'

ReactDOM.render(
  <StoreContext.Provider value={{ name: 'lis29', age: 11, store }}>
    <App />
  </StoreContext.Provider>
  ,
  document.getElementById('root')
);
