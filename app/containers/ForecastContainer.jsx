import React, { Component, PropTypes } from 'react'
import Forecast from '../components/Forecast'
import Loading from '../components/Loading'
import getWeather from '../helpers/api'

export default class ForecastContainer extends Component {
  constructor(props) {
    super(props)
    this.place = this.props.routeParams.place
    this.state = {
      current: {},
      currentLoaded: false,
      fiveDay: {},
      fiveDayLoaded: false
    }
  }

  componentWillMount() {
    getWeather.current(this.place)
      .then((weather) => {
        this.setState({
          current: weather.data,
          currentLoaded: true
        })
      })

    getWeather.fiveDay(this.place)
      .then((forecast) => {
        this.setState({
          fiveDay: forecast.data,
          fiveDayLoaded: true
        })
      })
  }

  render() {
    return (
      (this.state.currentLoaded && this.state.fiveDayLoaded) ?
        <Forecast
          currentWeather={this.state.current}
          fiveDayForecast={this.state.fiveDay} /> :
        <Loading />
    )
  }
}

ForecastContainer.propTypes = {
  routeParams: PropTypes.object.isRequired,
}
