import React, { Component } from 'react'
import NavMenu from '../components/NavMenu'

const styles = {
  navbar: {
    height: '8%'
  }
}

export default class NavMenuContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav style={styles.navbar}>
        <NavMenu />
      </nav>
    )
  }
}
