import axios from 'axios'

let apiKey = '25144c62c4d58a980fd0b81bf6db7145'

function currentWeather (cityName) {
  return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&type=accurate&APPID=' + apiKey)
}

function fiveDayForecast (cityName) {
  return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + cityName +'&type=accurate&APPID=' + apiKey + '&cnt=5')
}

export default {
  current: currentWeather,
  fiveDay: fiveDayForecast
}
