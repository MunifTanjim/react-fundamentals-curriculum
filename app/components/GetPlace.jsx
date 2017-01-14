import React from 'react'

const GetPlace = (props) => (
  <form style={props.formStyle} className={props.formClass}>
    <input type='text' placeholder='St. George, Utah' className='form-control' style={{width:'auto'}} />
    <button type='submit' style={{margin:'8px'}} className='btn btn-success'>Get Weather</button>
  </form>
)

GetPlace.propTypes = {
  formStyle: React.PropTypes.object.isRequired,
  formClass: React.PropTypes.string
}

export default GetPlace
