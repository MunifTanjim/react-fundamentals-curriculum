import React from 'react'
import GetPlaceContainer from '../containers/GetPlaceContainer'

const styles = {
  form: {
    display: 'flex',
    alignItems: 'center'
  }
}

const NavMenu = () => (
  <GetPlaceContainer formStyle={styles.form} />
)

export default NavMenu
