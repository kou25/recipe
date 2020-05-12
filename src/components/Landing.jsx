import React, { Component } from 'react'
import { connect } from 'react-redux';
import SearchForm from './SearchForm'
import RecipesContainer from './RecipesContainer'
import Spinner from './Spinner'



export  class Landing extends Component {
    render() {
        const { loading } = this.props;
        return (
            <div className="container">
               <SearchForm/> 
               {loading ? <Spinner /> : <RecipesContainer />}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    loading: state.recipes.loading
  });
  
  export default connect(mapStateToProps)(Landing);
