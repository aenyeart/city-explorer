import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

export default class LocationCard extends Component {
  render() {

    let locationMap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.cityObj.lat},${this.props.cityObj.lon}&zoom=12&size=288x288`;

    return (
      <>
        <Card id='city-card'>
          <Card.Img variant="top" src={locationMap} />
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