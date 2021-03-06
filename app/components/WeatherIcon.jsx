import React, { PropTypes } from 'react'

const Icon = (props) => {
  return (
    <div>
      <img
        src={'../app/images/icons/' + props.data.icon + '.svg'}
        alt={`Weather - ${props.data.main}`}
        style={styles.img} />
      {props.desc && <p style={styles.desc}>{props.data.description}</p>}
    </div>
)}

Icon.propTypes = {
  data: PropTypes.object.isRequired,
  desc: PropTypes.bool,
}

export default Icon

const styles = {
  desc: {
    textAlign: 'center',
  },
  img: {
    width: '12rem',
    height: '12rem',
    margin: '1rem'
  }
}
