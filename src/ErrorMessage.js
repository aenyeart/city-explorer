import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert'

export default class ErrorMessage extends Component {
  render() {
    let variant = 'primary';

    return (
      <Alert key='thing' variant={variant}>
        {this.props.errorMsg}
      </Alert>
    )
  }
}
