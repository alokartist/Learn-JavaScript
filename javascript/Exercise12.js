function getWeather() {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const city = document.getElementById('city').value;

    // Check if the city is provided
    if (!city.trim()) {
      alert('Please enter a city name.');
      return;
    }

    // Fetch weather data from OpenWeatherMap API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        displayWeather(data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        alert('Error fetching weather data. Please try again later.');
      });
  }

  function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = '';

    if (data.cod !== '404') {
      const cityName = data.name;
      const temperature = data.main.temp;
      const weatherDescription = data.weather[0].description;

      const weatherResult = document.createElement('div');
      weatherResult.innerHTML = `
        <h3>Weather in ${cityName}</h3>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${weatherDescription}</p>
      `;

      weatherInfo.appendChild(weatherResult);
    } else {
      alert('City not found. Please enter a valid city name.');
    }
  }