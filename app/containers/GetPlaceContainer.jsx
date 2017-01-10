import React, { Component, PropTypes } from 'react'
import GetPlace from '../components/GetPlace'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%'
  }
}

export default class GetPlaceContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section style={styles.container}>
        <GetPlace />
      </section>
    )
  }
}

GetPlaceContainer.propTypes = {
  children: PropTypes.node.isRequired
}
