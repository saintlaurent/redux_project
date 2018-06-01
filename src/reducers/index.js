import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

//Calling imported function combineReducers
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
