import {combineReducers} from 'redux';
import searchReducer from './searchReducer';
import { reducer as formReducer } from 'redux-form';


export default combineReducers({
    recipes: searchReducer,
    form: formReducer
});