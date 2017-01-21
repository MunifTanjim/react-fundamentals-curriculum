import axios from 'axios'

let apiKey = '25144c62c4d58a980fd0b81bf6db7145'

function currentWeather (cityName) {
  return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&type=accurate&APPID=' + apiKey)
}

function fiveDayForecast (cityName) {
  return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + cityName +'&type=accurate&APPID=' + apiKey + '&cnt=5')
}

export default {
  current: function (cityName) {
    return currentWeather(cityName)
      .then((weather) => {
        console.log('Current weather: ', weather.data)
      })
  },
  fiveDay: function (cityName) {
    return fiveDayForecast(cityName)
      .then((forecast) => {
        console.log('Five day forecast: ', forecast.data)
      })
  }
}
