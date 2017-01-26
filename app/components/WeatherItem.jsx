import React, { PropTypes } from 'react'
import Icon from '../components/WeatherIcon'
import get from '../helpers/utils'

const WeatherItem = (props) => {
  if (props.current)
    return (
      <section>
        <Icon data={props.data.weather[0]} />
      </section>
    )
  else
    return (
      <section style={styles.forecastDay}>
        <Icon data={props.data.weather[0]} />
        <h2>{get.date(props.date)}</h2>
      </section>
    )
}

WeatherItem.propTypes = {
  current: PropTypes.bool,
  data: PropTypes.object.isRequired,
  date: PropTypes.number.isRequired,
}

export default WeatherItem

const styles = {
  forecastDay: {
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'center',
    margin: '1em'
  }
}
