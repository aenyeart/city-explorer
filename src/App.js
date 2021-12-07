import React, { Component } from 'react'
// import axios from 'axios'
import CityEntry from './CityEntry.js'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      data: {},
      error: ''
    }
  }

  formSubmission = (e) => {

    console.log(e.target.cityName.value);
    // this.setState({ search: e.target.cityName.value})
  }

  render() {
    return (
      <>
        <CityEntry formSubmission={this.formSubmission} />
      </>
    )
  }
}

