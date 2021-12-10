import React, { Component } from 'react'

export default class Movie extends Component {
  render() {
    return (
      <>
        <h4>{this.props.movie.title}</h4>
        <p>{this.props.movie.overview}</p>
        {/* <p>{this.props.movie.image_url}</p> */}
        <p>Released: {this.props.movie.release_date}</p>
        <p>Popularity rating: {this.props.movie.popularity}</p>
        <p>Average audience rating / 10: {this.props.movie.vote_average}</p>
        <p>Total audience ratings: {this.props.movie.vote_count}</p>
      </>
    )
  }
}