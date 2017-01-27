import React, { PropTypes } from 'react'
import WeatherItemContainer from '../containers/WeatherItemContainer'

const Forecast = (props) => (
  <main style={styles.main}>
    <h1>{props.currentWeather.name}</h1>
    <div id='current-weather' style={styles.current}>
      <WeatherItemContainer
        data={props.currentWeather}
        current />
    </div>
    <div id='forecast' style={styles.forecast}>
      <h3 style={styles.h3}>Select a day</h3>
      {props.fiveDayForecast.list.map((day) => (
        <WeatherItemContainer
          key={day.dt}
          data={day}
          place={props.currentWeather.name} />
      ))}
    </div>
  </main>
)


Forecast.propTypes = {
  currentWeather: PropTypes.object.isRequired,
  fiveDayForecast: PropTypes.object.isRequired
}

export default Forecast

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
