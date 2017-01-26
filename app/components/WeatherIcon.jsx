import React, { PropTypes } from 'react'

const Icon = (props) => (
  <img src={'../app/images/icons/' + props.data.icon + '.svg'} alt='Weather' style={styles.img} />
)

Icon.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Icon

const styles = {
  img: {
    width: '12em',
    height: '12em',
    margin: '1em'
  }
}
