const days = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday'
}

const months = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'Aug',
  8: 'Sept',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec'
}

const getDate = (unixTime) => {
  let date = new Date(unixTime * 1000)
  return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`
}

const getTemperature = (kelvin) => (
  Math.round(kelvin - 273.15)
)

export default {
  date: getDate,
  temperature: getTemperature
}
