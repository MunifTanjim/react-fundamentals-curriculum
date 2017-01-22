import React, { PropTypes } from 'react'

const Forecast = (props) => (
  <span>Forecast place: {props.place}</span>
)

Forecast.propTypes = {
  place: PropTypes.string.isRequired,
}

export default Forecast
