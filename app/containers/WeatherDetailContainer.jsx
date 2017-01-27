import React, { Component, PropTypes } from 'react'
import WeatherDetail from '../components/WeatherDetail'

class WeatherDetailContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { data } = this.props.location.state
    return (
      <WeatherDetail
        data={data}
        weather={data.weather[0]} />
    )
  }
}

WeatherDetailContainer.propTypes = {
  location: PropTypes.object,
}

export default WeatherDetailContainer
