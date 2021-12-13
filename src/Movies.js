import React, { Component } from 'react'
import Movie from './Movie'
import Carousel from 'react-bootstrap/Carousel'


export default class Movies extends Component {
  render() {
    return (
      <Carousel slide={false} fade={false}>
        {this.props.movies.map((movie, idx) => <Movie movie={movie} key={`movie${idx}`} />)}
      </Carousel>
    )
  }
}
