import React from 'react'
import {makeStyles} from '@material-ui/core'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const getStyles = makeStyles(theme => ({
  button:{
    margin:theme.spacing(2),
    marginTop:'25px'
  },
  form: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  TextField:{
    marginLeft:theme.spacing(1),
    marginRight:theme.spacing(1)
  }
}))

const Form = () => {
  const classes = getStyles()
  return (
    <form>
      <TextField 
        label='Search Ingredients'
        name='recipeName'
        className={classes.TextField}
        margin='normal'
        variant='outlined'
      />
      <Button variant='outlined' className={classes.button} type='submit'>
        Search
      </Button>
    </form>
  )
}

export default Form;