import React, { Component } from 'react'
import axios from 'axios'
import CityEntry from './CityEntry.js'
import LocationCard from './LocationCard.js'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityObj: {},
      error: undefined
    }
  }

  formSubmission = (e) => {
    let newSearchTerm = e.target.cityName.value;
    this.setState({ city: newSearchTerm }, this.getLocationData)
  }
  getLocationData = async () => {
    try {
      let queryResponse = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
      this.setState({ cityObj: queryResponse.data[0], error: false });
    } catch {
      this.setState({ error: true });
    }
  }

  render() {
    return (
      <div id="app-wrapper">
        <CityEntry formSubmission={this.formSubmission} />
        {
          this.state.error ?
            <h3>Oops! That's embarrassing. Try another city name, perhaps?</h3> :
            this.state.cityObj.lat ?
              <LocationCard cityObj={this.state.cityObj} /> :
              <p>You never know where a desination search might take you...</p>
        }
      </div>
    )
  }
}

