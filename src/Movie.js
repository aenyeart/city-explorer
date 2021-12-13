import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default class Movie extends Component {
  render() {
    return (
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{this.props.movie.title}</h3>
          <p>{this.props.movie.overview}</p>
          <p>Released: {this.props.movie.release_date}</p>
          <p>Popularity rating: {this.props.movie.popularity}</p>
          <p>Average audience rating / 10: {this.props.movie.vote_average}</p>
          <p>Total audience ratings: {this.props.movie.vote_count}</p>

        </Carousel.Caption>
      </Carousel.Item>
    )
  }
}

