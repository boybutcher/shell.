import { combineReducers } from 'redux';
import queue from './reducers/queue-reducer.js';
import searchResults from './reducers/search-reducer.js';

export default combineReducers({
  queue,
  searchResults,
});