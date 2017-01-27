import React from 'react'
import GetPlaceContainer from '../containers/GetPlaceContainer'

const NavMenu = () => (
  <GetPlaceContainer formStyle={styles.form} />
)

export default NavMenu

const styles = {
  form: {
    display: 'flex',
    alignItems: 'center'
  }
}
