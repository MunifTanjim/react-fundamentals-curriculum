import React from 'react'
import GetPlace from './GetPlace'

const styles = {
  formStyle: {
    display: 'flex',
    alignItems: 'center'
  },
  formClass: 'form-inline'
}

const NavMenu = () => (
  <GetPlace formStyle={styles.formStyle} formClass={styles.formClass}/>
)

export default NavMenu
