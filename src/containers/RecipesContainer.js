import React, {Component} from 'react';

import Form from '../components/Form';
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

    console.log('fetching recipes')
  
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
    return (
    <div>
      <Form
        onInputChange={this.handleInputChange} 
        onSubmit={this.fetchRecipes}
      />
    </div>
    )
  }
}

export default RecipesContainer;