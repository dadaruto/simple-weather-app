document.getElementById('get-weather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = 'b17c9204569ad3a3417518cfb201268f';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherResult = document.getElementById('weather-result');
            if (data.cod === 200) {
                const temperature = data.main.temp;
                const weather = data.weather[0].description;
                weatherResult.innerHTML = `<h2>${city}</h2><p>${temperature}°C</p><p>${weather}</p>`;
            } else {
                weatherResult.innerHTML = `<p>City not found</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherResult = document.getElementById('weather-result');
            weatherResult.innerHTML = `<p>Error fetching weather data</p>`;
        });
});
