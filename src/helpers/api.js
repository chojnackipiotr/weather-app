export default function fetchCityData(city) {
  return new Promise((resolve, reject) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d959d73183b48095c816a6ce3b57da40`)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
  })
}
