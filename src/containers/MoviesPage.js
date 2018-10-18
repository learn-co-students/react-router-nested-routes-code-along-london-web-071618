// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from './MoviesList';
import MovieShow from './MovieShow';

const MoviesPage = ({ match, movies }) => (
  <div>
    <Route exact path={match.url} render={() => (<h3>Please select a movie from the list:</h3>)} />
    <Route path={`${match.url}/:movieId`} component={MovieShow}/>
    <MoviesList movies={movies} {...routerProps} />


  </div>

)

export default MoviesPage
