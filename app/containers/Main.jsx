import React, { PropTypes } from 'react'
import NavMenuContainer from './NavMenuContainer'

const Main = (props) => (
  <div style={styles.container}>
    <NavMenuContainer />
    {props.children}
  </div>
)

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main

const styles = {
  container: {
    width: '100%',
    height: '100%'
  }
}
