import React, { Component } from 'react'
import axios from 'axios'
import CityEntry from './CityEntry.js'
import LocationCard from './LocationCard.js'
import ErrorMessage from './ErrorMessage.js'
import Movies from './Movies.js'
import Weather from './Weather'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityObj: {},
      error: undefined,
      errorMsg: '',
      forecasts: [],
      movies: [],
    }
  }

  formSubmission = (e) => {
    let newSearchTerm = e.target.cityName.value;
    this.setState({ city: newSearchTerm }, this.getLocationData)
  }

  getLocationData = async () => {
    try {
      let queryResponse = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
      this.setState({ cityObj: queryResponse.data[0], error: false }, this.getOtherData);
    } catch (error) {
      this.setState({ error: true, errorMsg: error.message });
    }
  }

  getOtherData = () => {
    this.getWeatherData();
    this.getMoviesData();
  }

  getWeatherData = async () => {
    let location = this.state.cityObj.display_name.split(',')[0];
    /* This grabs the first part of the returned display_name: "Seattle, King County, Washington, USA" */

    let url = `${process.env.REACT_APP_SERVER_URL}/weather?lat=${this.state.cityObj.lat}&lon=${this.state.cityObj.lon}&location=${location}`;

    try {
      let weatherResponse = await axios.get(url);
      let weeklyForecast = weatherResponse.data.slice(0, 7);
      this.setState({ forecasts: weeklyForecast });
    } catch (error) {
      console.log(error);
      this.setState({ forecasts: [] }); // re-renders LocationCard, removing Weather component if no weather data
      console.log('getWeatherData failed in its endeavors');
    }
  }

  getMoviesData = async () => {
    let location = this.state.cityObj.display_name.split(',')[0];
    let url = `${process.env.REACT_APP_SERVER_URL}/movies?location=${location}`;
    try {
      let moviesResponse = await axios.get(url);
      this.setState({ movies: moviesResponse.data });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <div id="app-wrapper">
        <div id='city-wrapper'>
          <CityEntry formSubmission={this.formSubmission} />
          {
            this.state.error &&
            <ErrorMessage errorMsg={this.state.errorMsg} />
          }
          {
            this.state.cityObj.lat ?
              <LocationCard cityObj={this.state.cityObj} /> :
              <p>You never know where a desination search might take you...</p>
          }
        </div>
        {
          this.state.forecasts.length > 0 &&
          <div id='weather-wrapper'>
            <Weather forecasts={this.state.forecasts} />
          </div>
        }
        {
          this.state.movies.length > 0 &&
          <div id='movie-wrapper'>
            <Movies movies={this.state.movies} />
          </div>
        }
      </div>
    )
  }
}