import React, { PropTypes } from 'react'

const GetPlace = (props) => (
  <form onSubmit={props.onSubmitPlace} style={props.formStyle}>
    <input
      type='text'
      placeholder='St. George, Utah'
      className='form-control'
      style={{width:'auto'}}
      onChange={props.onUpdatePlace}
      value= {props.place} />
    <button
      style={{margin:'8px'}}
      className='btn btn-success'
      type='submit'>
      Get Weather
    </button>
  </form>
)

GetPlace.propTypes = {
  formStyle: PropTypes.object.isRequired,
  onSubmitPlace: PropTypes.func.isRequired,
  onUpdatePlace: PropTypes.func.isRequired,
  place: PropTypes.string.isRequired,
}

export default GetPlace
