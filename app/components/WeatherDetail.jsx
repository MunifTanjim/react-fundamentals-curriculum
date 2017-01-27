import React, { PropTypes } from 'react'
import Icon from '../components/WeatherIcon'

const WeatherDetail = (props) => (
  <Icon data={props.weather} desc />
)

WeatherDetail.propTypes = {
  weather: PropTypes.object,
}

export default WeatherDetail
