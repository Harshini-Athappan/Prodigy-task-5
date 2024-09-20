
const apiKey = 'a75074b7304018fcf11ecf4a9ed49cb4';

function getWeather() {
    const city = document.getElementById('city').value;
    
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                alert(data.message);
                return;
            }
            
            // Display weather data
            document.getElementById('city-name').innerText = data.name + ', ' + data.sys.country;
            document.getElementById('weather-description').innerText = data.weather[0].description;
            document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C`;
            document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity} %`;
            document.getElementById('wind-speed').innerText = `Wind Speed: ${data.wind.speed} m/s`;

            document.getElementById('weather-result').style.display = 'block';
        })
        .catch(error => {
            alert('Failed to fetch weather data');
            console.log(error);
        });
}
