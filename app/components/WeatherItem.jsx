import React, { PropTypes } from 'react'
import Icon from '../components/WeatherIcon'
import get from '../helpers/utils'

const WeatherItem = (props) => (
  (props.current) ? (
    <section>
      <ul style={styles.ul}>
        <li><Icon data={props.weather} desc /></li>
        <li>Humidity: {props.data.humidity}%</li>
        <li>Temperature: {get.temperature(props.data.temp)}&deg;C</li>
      </ul>
    </section>
  ) : (
    <section style={styles.forecastDay}
      onClick={props.onClick} >
      <Icon data={props.weather} />
      <h2>{get.date(props.date)}</h2>
    </section>
  )
)

WeatherItem.propTypes = {
  current: PropTypes.bool,
  data: PropTypes.object,
  date: PropTypes.number,
  weather: PropTypes.object.isRequired,
  onClick: PropTypes.func,
}

export default WeatherItem

const styles = {
  forecastDay: {
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'center',
    margin: '1em'
  },
  ul: {
    fontSize: '2em',
    listStyle: 'none',
    padding: 0,
    margin: 0
  }
}
