import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'


export default class Movie extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        {/* <p>{this.props.movie.image_url}</p> */}
        <Card.Body>
          <Card.Title>{this.props.movie.title}</Card.Title>
          <Card.Text>
            {this.props.movie.overview}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Released: {this.props.movie.release_date}</ListGroupItem>
          <ListGroupItem>Popularity rating: {this.props.movie.popularity}</ListGroupItem>
          <ListGroupItem>Average audience rating: {this.props.movie.vote_average} / 10</ListGroupItem>
          <ListGroupItem>Total audience ratings: {this.props.movie.vote_count}</ListGroupItem>
        </ListGroup>
      </Card>
    )
  }
}