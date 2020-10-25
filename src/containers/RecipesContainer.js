import React, {Component} from 'react';

import Form from '../components/Form';
import Loading from '../components/Loading';
import Recipes from '../components/Recipes';
import {getRecipes} from '../services/api'

class RecipesContainer extends Component {
  state = {
    recipeName :'',
    recipes : [],
    isLoading:false
  }

  fetchRecipes = e => {
    const {recipeName} =this.state
    e.preventDefault()

    this.setState({
      isLoading:true
    })

    getRecipes(recipeName).then(
      recipes => {
        this.setState({
          recipes,
          isLoading:false
        })
      },
      error => {
        alert('Error', `Something went Wrong! ${error}`)
      }
    )
  }
  
  handleInputChange = recipeName => {
    // console.log(this.state.recipeName)
    this.setState({
      recipeName
    })
  }

  render() {
    const {isLoading, recipes} = this.state
    return (
    <div>
      <Form
        onInputChange={this.handleInputChange} 
        onSubmit={this.fetchRecipes}
      />
      {isLoading ? <Loading />: <Recipes recipes={recipes} />}
    </div>
    )
  }
}

export default RecipesContainer;