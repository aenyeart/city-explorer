import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'


export default class LocationCard extends Component {
  render() {
    return (
      <>
        <Card style={{ width: '18rem' }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>{this.props.cityObj.display_name}</Card.Title>
            <ListGroup variant="flush">
              <ListGroup.Item>Latitude: {this.props.cityObj.lat}</ListGroup.Item>
              <ListGroup.Item>Longitude: {this.props.cityObj.lon}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </>
    )
  }
}