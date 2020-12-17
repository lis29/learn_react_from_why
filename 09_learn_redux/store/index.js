import pkg from 'redux';
const { createStore } = pkg;
import reducer from './reducer.js'

const store = createStore(reducer);

export default store;