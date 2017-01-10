import React, { PropTypes } from 'react'
import NavMenuContainer from './NavMenuContainer'

const styles = {
  container: {
    width: '100%',
    height: '100%'
  }
}

const Main = (props) => (
  <div style={styles.container}>
    <NavMenuContainer />
    {props.children}
  </div>
)

Main.propTypes = {
  children: PropTypes.number.isRequired,
}

export default Main
