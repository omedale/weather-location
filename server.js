const axios = require('axios')

getWeather = (cities) => {
  cities.forEach(city => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city.postalCode}&APPID=01735c6df3ab8d2274225b6cd6221873`)
    .then(function (response) {
      const { description } = response.data.weather[0]
      const data = {
        time: getCurrentTime(),
        weather: description,
        city: city.city
      }
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
  })
};

getCurrentTime = () => {
  const today = new Date();
  return today.toTimeString().split(' ')[0]
}

getWeather([
  {city: 'Providence, RI', postalCode: '02904'},
  {city: 'Noblesville, IN', postalCode: '46060'},
  {city: 'Hanover Park, IL', postalCode: '60133'},
  {city: 'Stuart, FL', postalCode: '34997'},
  {city: 'Newington, CT', postalCode: '06111'}
]);