import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import RecipeCard from './RecipeCard'

const getStyles = makeStyles(theme => ({
  root: {
    margin: '5em 0'
  }
}))

const Recipes = props => {
  const classes = getStyles()

  const getRecipeIdFromUri = uri => {
    //uri 예 : https://www.edamam.com/ontologies/edamam.owl#recipe_8f69b3fd2002ef80c81ac31b8b92fad6
    const array = uri.split('#')
    //array =  ["http://www.edamam.com/ontologies/edamam.owl", "recipe_8f69b3fd2002ef80c81ac31b8b92fad6"]
    const id = array[array.length -1]
    // array에서 두번째 값 가져오겠다는거 
    return id
  }

  return (
    <div className='container'>
      <Grid container className={classes.root} spacing={5}>
        {props.recipes.map(recipe => {
          const {uri,label,image,source} = recipe.recipe
          return (
            <Grid item xs={3}>
              <RecipeCard
                key={getRecipeIdFromUri(uri)}
                id={getRecipeIdFromUri(uri)}
                label={label}
                imageUrl={image}
                source={source}
                uri={uri}
              />
            </Grid>
          )
        })} 
      </Grid>
    </div>
  )
}

export default Recipes