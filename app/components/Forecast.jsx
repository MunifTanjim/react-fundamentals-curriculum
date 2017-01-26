import React, { PropTypes } from 'react'
import WeatherItem from '../components/WeatherItem'

const styles = {
  main: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center'
  },
  current: {
    textAlign: 'center'
  },
  forecast: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around'
  },
  h3: {
    flexBasis: '100%',
    textAlign: 'center'
  }
}

const Forecast = (props) => {
  let { name } = props.currentWeather
  console.log(props.currentWeather, props.fiveDayForecast)
  return (
    <main style={styles.main}>
      <h1>{name}</h1>
      <div id='current-weather' style={styles.current}>
        <WeatherItem
          date={props.currentWeather.dt}
          data={props.currentWeather}
          current />
      </div>
      <div id='forecast' style={styles.forecast}>
        <h3 style={styles.h3}>Select a day</h3>
        {props.fiveDayForecast.list.map((day) => (
          <WeatherItem
            key={day.dt}
            date={day.dt}
            data={day} />
        ))}
      </div>
    </main>
  )
}

Forecast.propTypes = {
  currentWeather: PropTypes.object.isRequired,
  fiveDayForecast: PropTypes.object.isRequired
}

export default Forecast
