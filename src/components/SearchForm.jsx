import React, { Component } from 'react'
import {connect} from 'react-redux'
import {searchRecipe, fetchRecipes, setLoading} from '../actions/searchActions';

export class SearchForm extends Component {
    onChange = e =>{
        this.props.searchRecipe(e.target.value);
    };

    onSubmit = e =>{
        e.preventDefault();
        this.props.fetchRecipes(this.props.text);
        this.props.setLoading();
    };
    render() {
        return (
        <div  className="jumbotron jumbotron-fluid mt-5 text-center" id="img">
        <div style={{width:"100%"}} >
          <h1 className="display-4 mb-3" style={{  color:"white", textShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px black"}}>
            <i className="fa fa-search"  /> Search for a <span style={{color:"yellow"}}>Recipe</span><i className="fa fa-search p-3"  />
          </h1>
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
            style={{width: "60%", marginLeft: "20%"}}
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search Recipes ..."
              onChange={this.onChange}
            />
            <button type="submit" className="btn btn-danger btn-bg mt-3" style={{boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"}}>
              Search
            </button>
          </form>
        </div>
      </div>
        )
    }
}
const mapStateToProps= state =>({
    text: state.recipes.text
});

export default connect(mapStateToProps,
    {searchRecipe, fetchRecipes, setLoading})(SearchForm);