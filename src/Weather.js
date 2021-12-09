import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export default class Weather extends Component {

  render() {

    return (
      <ListGroup.Item>
        <h3>Local Weather:</h3>
        {
          this.props.forecasts.map((forecast) => { // "key" attribute is to avoid error re: children in lists without keys 
            return (
              <div > 
                <h4>{forecast.date}</h4>
                <p>{forecast.description}</p>
              </div>
            )
          })
        }
      </ListGroup.Item>
    )
  }
}
