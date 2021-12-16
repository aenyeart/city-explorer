import React, { Component } from 'react'
import Movie from './Movie'

export default class Movies extends Component {
  render() {
    return (
      <div class='movie-container'>
        {this.props.movies.map((movie, idx) => <Movie movie={movie} key={`movie${idx}`} />)}
      </div>
    )
  }
}
