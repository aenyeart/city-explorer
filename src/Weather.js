import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export default class Weather extends Component {

  render() {

    return (
      <ListGroup.Item>
        <h3>Local Weather:</h3>
        {
          this.props.forecasts.map((forecast, idx) => { 
            return (
              <div key={`forecast${idx}`}> 
                <h4>{forecast.date}</h4>
                <p>{forecast.description}</p>
              </div> );
          })
        }
      </ListGroup.Item>
    )
  }
}
