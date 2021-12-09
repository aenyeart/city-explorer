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
      errorMsg: '',
      forecasts: []
    }
  }

  formSubmission = (e) => {
    let newSearchTerm = e.target.cityName.value;
    this.setState({ city: newSearchTerm }, this.getLocationData)
  }

  getLocationData = async () => {
    try {
      let queryResponse = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
      console.log(queryResponse.data[0]);
      this.setState({ cityObj: queryResponse.data[0], error: false }, this.getWeatherData);
    } catch (error) {
      this.setState({ error: true, errorMsg: error.message });
    }
  }

  getWeatherData = async () => {
    /* This grabs only the first part of the returned string:
       display_name: "Seattle, King County, Washington, USA" */
    let locQuery = this.state.cityObj.display_name.split(',')[0];
    console.log(locQuery);
    try {
      let weatherResponse = await axios.get(`http://localhost:3001/weather?lat=${this.state.cityObj.lat}&lon=${this.state.cityObj.lon}&locQuery=${locQuery}`);
      console.log(weatherResponse);
      this.setState({ forecasts: weatherResponse.data });
    } catch (error) {
      console.log(error);
      this.setState({ forecasts: [] }); // triggers re-render of LocationCard, removing rendered Weather component if no weather data available
      console.log('getWeatherData failed in its endeavors');
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
              <LocationCard forecasts={this.state.forecasts} cityObj={this.state.cityObj} /> :
              <p>You never know where a desination search might take you...</p>
        }
      </div>
    )
  }
}