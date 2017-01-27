import React, { PropTypes } from 'react'
import Icon from '../components/WeatherIcon'
import get from '../helpers/utils'

const WeatherDetail = (props) => (
  <main style={styles.container}>
    <h1>{props.place}</h1>
    <h3>{get.date(props.data.dt)}</h3>
    <ul style={styles.ul}>
      <li><Icon data={props.data.weather[0]} desc /></li>
      <li>Humidity: {props.data.humidity}%</li>
      <li>Min Temp: {get.temperature(props.data.temp.min)}&deg;C</li>
      <li>Max Temp: {get.temperature(props.data.temp.max)}&deg;C</li>
    </ul>
  </main>
)

WeatherDetail.propTypes = {
  data: PropTypes.object.isRequired,
  place: PropTypes.string.isRequired,
}

export default WeatherDetail

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center'
  },
  ul: {
    fontSize: '2em',
    padding: 0,
    margin: 0,
    listStyle: 'none',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center'
  }
}
