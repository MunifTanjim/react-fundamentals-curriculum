import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import WeatherItem from '../components/WeatherItem'

class WeatherItemContainer extends Component {
  constructor(props) {
    super(props)
  }

  handleShowDetail() {
    this.props.router.push({
      pathname: '/detail/' + this.props.params.place,
      state: {
        data: this.props.data
      }
    })
  }

  render() {
    return (this.props.current) ? (
      <WeatherItem
        weather={this.props.data.weather[0]}
        current />
    ) : (
      <WeatherItem
        date={this.props.data.dt}
        weather={this.props.data.weather[0]}
        onClick={this.handleShowDetail.bind(this)} />
    )
  }
}

WeatherItemContainer.propTypes = {
  current: PropTypes.bool,
  data: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
}

export default withRouter(WeatherItemContainer)
