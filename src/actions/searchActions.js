import {SEARCH_RECIPE, FETCH_RECIPES, LOADING} from './types'
import {APIKey} from '../APIKey'
import {APPKey} from '../APPKey'
import axios from 'axios';


export const searchRecipe = text => dispatch => {
    dispatch({
        type: SEARCH_RECIPE,
        payload: text
    });
};

export const fetchRecipes = text =>  dispatch =>{
    axios.get(`https://api.edamam.com/search?q=${text}&app_id=${APIKey}&app_key=${APPKey}`)
    .then(response =>
        dispatch({
          type: FETCH_RECIPES,
          payload: response.data.hits
        })
      )
      .catch(err => console.log(err));
  };
export const setLoading = () => {
    return {
      type: LOADING
    };
  };