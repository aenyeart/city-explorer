import React, { Component } from 'react'
import axios from 'axios'
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

  render() {
    return (
      <>
        <CityEntry />
      </>
    )
  }
}

