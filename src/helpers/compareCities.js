export default function compareCities (key, value, city) {
  const compareObject = {
    temperature: {
      lower: `°C colder than in ${city.toUpperCase()}`,
      greater: `°C hotter than in ${city.toUpperCase()}`,
      same: `Same temperature as in ${city.toUpperCase()}`
    },
    pressure: {
      lower: `hPa lower than in ${city.toUpperCase()}`,
      greater: `hPa greater than in ${city.toUpperCase()}`,
      same: `Same pressure as in ${city.toUpperCase()}`,
    },
    humidity: {
      lower: `% lower than in ${city.toUpperCase()}`,
      greater: `% greater than in ${city.toUpperCase()}`,
      same: `Same humidity as in ${city.toUpperCase()}`,
    }
  };

  const absoluteNumber = parseFloat(Math.abs(value).toFixed(2));

  if(value < 0) {
    return `${absoluteNumber}${compareObject[key]['lower']}`
  } else if (value > 0) {
    return `${absoluteNumber}${compareObject[key]['greater']}`
  } else {
    return `${compareObject[key]['same']}`
  }
}
