import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import GetPlace from '../components/GetPlace'

const styles = {
  form: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

class GetPlaceContainer extends Component {
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
    let place = this.state.place
    this.setState({
      place: ''
    })
    this.props.router.push('/forecast/' + place)
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
  formStyle: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
}

export default withRouter(GetPlaceContainer)
