import React, {Component} from 'react';

import Form from '../components/Form';


class RecipesContainer extends Component {
  state = {
    recipeName :'',
    recipes : [],
    isLoading:false
  }

  render() {
    return (
    <div>
      <Form>

      </Form>
    </div>
    )
  }
}

export default RecipesContainer;