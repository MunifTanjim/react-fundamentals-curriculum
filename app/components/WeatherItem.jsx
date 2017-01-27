import React, { PropTypes } from 'react'
import Icon from '../components/WeatherIcon'
import get from '../helpers/utils'

const WeatherItem = (props) => {
    return (
      (props.current) ? (
        <section>
          <Icon data={props.weather} desc />
        </section>
      ) : (
        <section style={styles.forecastDay}
          onClick={props.onClick} >
          <Icon data={props.weather} />
          <h2>{get.date(props.date)}</h2>
        </section>
      )
    )
}

WeatherItem.propTypes = {
  current: PropTypes.bool,
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
  }
}
