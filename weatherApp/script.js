function getWeatherData(location) {
  // Replace 'YOUR_API_KEY' with your actual API key
  const apiKey = "YOUR_API_KEY";
  const apiUrl = `https://api.example.com/weather?location=${location}&apiKey=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Process and log the weather data
      console.log("Weather Data:", data);
    })
    .catch((error) => {
      console.log("An error occurred while fetching weather data:", error);
    });
}

getWeatherData("New York");

function processWeatherData(data) {
  // Extract the necessary data from the JSON response
  const location = data.location.name;
  const temperature = data.current.temperature;
  const description = data.current.weather_descriptions[0];
  const humidity = data.current.humidity;
  const windSpeed = data.current.wind_speed;

  // Create an object with the extracted data
  const weatherObject = {
    location: location,
    temperature: temperature,
    description: description,
    humidity: humidity,
    windSpeed: windSpeed,
  };

  return weatherObject;
}

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const processedData = processWeatherData(data);
    console.log("Processed Weather Data:", processedData);
  })
  .catch((error) => {
    console.log("An error occurred while fetching weather data:", error);
  });

function showWeather() {
  const location = document.getElementById("locationInput").value;
  const weatherContainer = document.getElementById("weatherContainer");

  let condition, tempDay, tempNight;

  if (location === "New York") {
    condition = "Cloudy";
    tempDay = 20;
    tempNight = 11;
  } else if (location === "Munich") {
    condition = "Sunny";
    tempDay = 37;
    tempNight = 23;
  } else {
    weatherContainer.textContent =
      "Weather information not available for this location.";
    return;
  }

  weatherContainer.textContent = "";

  const h2 = document.createElement("h2");
  h2.textContent = `Weather in ${location}`;
  weatherContainer.appendChild(h2);

  const p1 = document.createElement("p");
  p1.textContent = `Condition: ${condition}`;
  weatherContainer.appendChild(p1);

  const p2 = document.createElement("p");
  p2.textContent = `Temperature (Day): ${tempDay} °C`;
  weatherContainer.appendChild(p2);

  const p3 = document.createElement("p");
  p3.textContent = `Temperature (Night): ${tempNight} °C`;
  weatherContainer.appendChild(p3);
}
