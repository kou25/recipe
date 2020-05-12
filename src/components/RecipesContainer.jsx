import React, { Component } from 'react';

import { connect } from 'react-redux';

import RecipeCard from './RecipeCard';

export class RecipesContainer extends Component {
  render() {
    const { recipes } = this.props;
    let content = '';

    content = recipes.length > 0 ? recipes.map((recipe) => (
            <RecipeCard
            key={recipe.recipe.label}
            title={recipe.recipe.label} 
            image={recipe.recipe.image}
            calories={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredients}
         />
          ))
        : <h3 style={{color:"red", paddingLeft: "35%"}}>Search Valid Recipes above...</h3>;
    return <div className="row">{content}</div>;
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes.recipes
});

export default connect(mapStateToProps)(RecipesContainer);