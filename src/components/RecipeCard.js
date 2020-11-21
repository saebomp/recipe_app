import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import {Link} from 'react-router-dom'

const getStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop:'58.25%' //16.9
  },
  line: {
    lineHeight:'1.5em',
    height:'4em'
  },
  center: {
    margin:'0 auto'
  }
}))

const RecipeCard = props => {
  const classes = getStyles()
  const { key, id, imageUrl, label, source, uri } = props

  return(
    <Card key={key}>
       <CardHeader title={label} subheader={source} className={classes.line}/>
       <CardMedia className={classes.media} image={imageUrl} label={label} />
       <CardActions>
        <Button 
          size='small' 
          color='primary'
          className={classes.center}>
          <Link
            to={{
              pathname:`recipe/${id}`,
              state:{
                uri:uri
              }
              //https://stackoverflow.com/questions/41736048/what-is-a-state-in-link-component-of-react-router
            }}
          >
            Learn More
          </Link>
        </Button>
      </CardActions>
    </Card>
  )
}

export default RecipeCard