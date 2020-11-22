import react from 'react'
import {Link} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const getStyles = makeStyles(theme => ({
  root: {
    marginTop: '5em'
  }
}))

const Recipe = ({ label, imageUrl, source, sourceUrl }) => {
  const classes = getStyles()
  return (
  <Container fixed className={classes.root}>
    {label && (
      //https://ko.reactjs.org/docs/conditional-rendering.html
      //if 문 /   {label ? 어쩌구 : 저쩌구} 는 if else문임
      <Card>
        <CardMedia
            alt={label}
            component='img'
            height='1440'
            image={imageUrl}
            title={label}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {label}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              Source: {source}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              Website: {sourceUrl}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small' color='primary'>
              <Link
                to={{
                  pathname: '/'
                }}
              >
                Go Back Home
              </Link>
            </Button>
          </CardActions>
      </Card>
    )}
  </Container>
  )
}

export default Recipe;