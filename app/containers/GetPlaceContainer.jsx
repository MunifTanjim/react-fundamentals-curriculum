import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import GetPlace from '../components/GetPlace'

class GetPlaceContainer extends Component {
  constructor(props) {
    super(props)
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
    this.props.router.push('/forecast/' + this.state.place)
  }

  render() {
    return (
      <GetPlace
        formStyle={this.props.formStyle}
        onSubmitPlace={this.handleSubmitPlace.bind(this)}
        onUpdatePlace={this.handleUpdatePlace.bind(this)}
        place={this.state.place} />
    )
  }
}

GetPlaceContainer.propTypes = {
  formStyle: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
}

export default withRouter(GetPlaceContainer)

const styles = {
  form: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

GetPlaceContainer.defaultProps = {
  formStyle: styles.form
}
