import React, { Component, PropTypes } from 'react'
import Forecast from '../components/Forecast'

export default class ForecastContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Forecast place={this.props.routeParams.city} />
    )
  }
}

ForecastContainer.propTypes = {
  routeParams: PropTypes.object.isRequired,
}
