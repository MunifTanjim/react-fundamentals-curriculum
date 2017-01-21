import React, { Component } from 'react'
import GetPlace from '../components/GetPlace'
import getWeather from '../helpers/api'

const styles = {
  form: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default class GetPlaceContainer extends Component {
  constructor(props) {
    super(props)
    this.handleUpdatePlace = this.handleUpdatePlace.bind(this)
    this.handleSubmitPlace = this.handleSubmitPlace.bind(this)
    this.state = {
      place: ''
    }
  }

  handleUpdatePlace(e) {
    this.setState({
      place: e.target.value
    })
  }

  handleSubmitPlace(e) {
    e.preventDefault()
    getWeather.current(this.state.place)
    getWeather.fiveDay(this.state.place)
  }

  render() {
    return (
      <GetPlace
        formStyle={this.props.formStyle}
        onSubmitPlace={this.handleSubmitPlace}
        onUpdatePlace={this.handleUpdatePlace}
        place={this.state.place} />
    )
  }
}

GetPlaceContainer.defaultProps = {
  formStyle: styles.form
}

GetPlaceContainer.propTypes = {
  formStyle: React.PropTypes.object.isRequired
}
