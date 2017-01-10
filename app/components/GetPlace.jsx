import React from 'react'

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  h1: {
    color: '#fff'
  }
}

const GetPlace = () => (
  <form style={styles.container}>
    <div className='form-group' style={styles.container}>
      <label htmlFor='inputPlace'><h1 style={styles.h1}>Enter a City or State</h1></label>
      <input id='inputPlace' type='text' placeholder='St. George, Utah' className='form-control' style={{width:'auto'}} />
    </div>
    <button type='submit' className='btn btn-success'>Get Weather</button>
  </form>
)

export default GetPlace
