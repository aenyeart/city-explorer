import React, { Component } from 'react'
import axios from 'axios'
import CityEntry from './CityEntry.js'
import LocationCard from './LocationCard.js'
import ErrorMessage from './ErrorMessage.js'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityObj: {},
      error: undefined,
      errorMsg: ''
    }
  }

  formSubmission = (e) => {
    let newSearchTerm = e.target.cityName.value;
    this.setState({ city: newSearchTerm }, this.getLocationData)
  }
  getLocationData = async () => {
    try {
      let queryResponse = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
      console.log(queryResponse);
      this.setState({ cityObj: queryResponse.data[0], error: false });
    } catch (error) {
      this.setState({ error: true, errorMsg: error.message });
    }
  }

  render() {
    return (
      <div id="app-wrapper">
        <CityEntry formSubmission={this.formSubmission} />
        {
          this.state.error ?
            <ErrorMessage errorMsg={this.state.errorMsg} /> :
            this.state.cityObj.lat ?
              <LocationCard cityObj={this.state.cityObj} /> :
              <p>You never know where a desination search might take you...</p>
        }
      </div>
    )
  }
}