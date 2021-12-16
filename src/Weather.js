import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import WeatherDay from './WeatherDay'

export default class Weather extends Component {

  render() {
    return (
      <>
        <h3>Local Weather:</h3>
        {
          this.props.forecasts.map((forecast, idx) => { 
            return (
              <ListGroup.Item key={`forecast${idx}`}> 
                <WeatherDay forecast={forecast}/>
              </ListGroup.Item> );
          })
        }
      </>
    )
  }
}
