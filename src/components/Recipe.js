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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const getStyles = makeStyles(theme => ({
  root: {
    marginTop: '5em'
  },
  center: {
    margin:'0 auto'
  }
}))


const Recipe = ({ label, imageUrl, source, sourceUrl,ingredients, calories, totalNutrients }) => {
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
              <b>Source:</b> {source}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              <b>Website:</b> <a href={sourceUrl} target="_blank">{sourceUrl}</a>
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              <b>ingredients:</b> 
              {ingredients.map( (list) => (
              <div>{list.text}</div>
              ))}
            </Typography>
            <TableContainer component={Paper} style={{marginTop:'20px'}}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Energy&nbsp;(kcal)</TableCell>
                  <TableCell>Fat&nbsp;(g)</TableCell>
                  <TableCell>Carbs&nbsp;(g)</TableCell>
                  <TableCell>Protein&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                  {calories}
                  </TableCell>
                  <TableCell>{JSON.stringify(totalNutrients.FAT.quantity)}</TableCell>
                  <TableCell>{JSON.stringify(totalNutrients.CHOCDF.quantity)}</TableCell>
                  <TableCell>{JSON.stringify(totalNutrients.PROCNT.quantity)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          </CardContent>
          <CardActions>
            <Button size='small' color='primary' className={classes.center}>
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

//https://developer.edamam.com/edamam-recipe-api-demo


//https://api.edamam.com/search?q=chicken&app_id=d4e82930&app_key=7235ef81dcbab773f3e449828d41d4da

