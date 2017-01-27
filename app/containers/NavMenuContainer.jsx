import React, { Component } from 'react'
import NavMenu from '../components/NavMenu'

export default class NavMenuContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav style={styles.nav}>
        <h2 style={styles.h2}>What the Weather!</h2>
        <NavMenu />
      </nav>
    )
  }
}

const styles = {
  nav: {
    height: '8%',
    minHeight: '54px',
    backgroundColor: 'rgba(252, 90, 44, 0.890196)',
    display: 'flex',
    justifyContent: 'space-between'
  },
  h2: {
    margin: '8px',
    color: '#fff'
  }
}
