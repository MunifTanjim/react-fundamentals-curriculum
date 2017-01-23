import React, { PropTypes } from 'react'

const Forecast = (props) => {
  console.log(props.currentWeather, props.fiveDayForecast)
  return (
    <div>Forecast component</div>
  )
}

Forecast.propTypes = {
  currentWeather: PropTypes.object.isRequired,
  fiveDayForecast: PropTypes.object.isRequired
}

export default Forecast
