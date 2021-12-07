import React, { Component } from 'react'
import axios from 'axios'
import CityEntry from './CityEntry.js'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityObj: {},
      error: false
    }
  }

  formSubmission = (e) => {
    let newSearchTerm = e.target.cityName.value;
    this.setState({ city: newSearchTerm }, this.getLocationData)
  }
  getLocationData = async () => {
    try {
      let queryResponse = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
      this.setState({ cityObj: queryResponse.data[0] });
    } catch {
      this.setState({ error: true });
    }
  }

  render() {
    return (
      <>
        <CityEntry formSubmission={this.formSubmission} />
        {/* will use ternary operator to do conditional rendering */
          this.state.error ?
            <h3>Oops! That's embarrassing. Try another city name, perhaps.</h3> :
            this.state.cityObj ?
              (<ul>
                <li>City: {this.state.cityObj.display_name}</li>
                <li>Latitude: {this.state.cityObj.lat}</li>
                <li>Longitude: {this.state.cityObj.lon}</li>
              </ul>) : null
        }
      </>
    )
  }
}

