import {SEARCH_RECIPE, FETCH_RECIPES, LOADING} from '../actions/types'

const initialstate={
    text: '',
    recipes: [],
    loading: false
};

export default function(state = initialstate, action){
    switch(action.type){
        case SEARCH_RECIPE:
            return{
                ...state,
                text: action.payload,
                loading: false
            };
        case FETCH_RECIPES:
            return{
                ...state,
                recipes: action.payload,
                loading: false
            };
        case LOADING:
            return {
                ...state,
                loading: true
                };
        default:
            return state;
    }
}