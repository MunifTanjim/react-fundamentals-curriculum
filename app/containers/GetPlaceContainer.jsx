import React, { Component } from 'react'
import GetPlace from '../components/GetPlace'

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    height: '100%'
  },
  h1: {
    textAlign: 'center',
    color: '#fff'
  },
  formStyle: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default class GetPlaceContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section style={styles.container}>
        <h1 style={styles.h1}>Enter a City or State</h1>
        <GetPlace formStyle={styles.formStyle} />
      </section>
    )
  }
}
