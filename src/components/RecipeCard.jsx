import React, { Component } from 'react';

export class RecipeCard extends Component {
  render() {
    const {title,calories,image,ingredients } = this.props;
    return (
        <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100">
          <img  className="w-100 mb-2" style={{borderRadius:"30%"}} src={image} alt="Movie Cover" />
          <hr style={{backgroundColor:"white"}}/>
          <h5 className="text-info card-title" >
            {title}
          </h5>
          <ul style={{color:"white", textAlign:"left"}}>
          <p ><b>Ingredient</b></p>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ul>
          <p style={{ color:"yellow"}}><b>calories =</b> {calories}</p>
        </div>
      </div>
    );
  }
}

export default RecipeCard;