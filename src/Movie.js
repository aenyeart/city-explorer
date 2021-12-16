import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default class Movie extends Component {
  render() {
    return (
      <>
        <img
          className="d-block w-100"
          src="https://place-hold.it/800x550/666"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{this.props.movie.title}</h3>
          <p>{this.props.movie.overview.slice(0,350) + '...'}</p>
          <p>Released: {this.props.movie.release_date}</p>
          <p>Popularity rating: {this.props.movie.popularity}</p>
          <p>Average audience rating / 10: {this.props.movie.vote_average}</p>
          <p>Total audience ratings: {this.props.movie.vote_count}</p>

        </Carousel.Caption>
      </>
    )
  }
}

