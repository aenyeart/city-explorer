import React, { Component } from 'react'

export default class WeatherDay extends Component {
  render() {
    return (
      <>
        <h4>{this.props.forecast.date}</h4>
        <p>{this.props.forecast.description}</p>
      </>
    )
  }
}
