# weatherApp
 Working with API for the first time

# Overview
This simple web application allows users to retrieve and display weather information for a specific city, utilizing the OpenWeatherMap API for data retrieval. Once the weather data is fetched, the application dynamically updates the UI, presenting relevant data such as temperature, weather description, humidity, wind speed, and corresponding country flag and weather icon.

# Features
City Search: Users can search for a city to retrieve its current weather data.
Dynamic UI Update: Display weather information, including temperature, description, humidity, wind speed, and relevant icons and flags.
Error Handling: A message is displayed when the requested city is not found.

# How to Use
- Search for a City
1. Manual Search
Type a city name into the input field.
Click on the search button to retrieve and display the weather data.

2. Search on Enter
Type a city name into the input field.
Press the "Enter" key to retrieve and display the weather data.

# Displayed Information
Once a city is searched, the application displays:

City Name
Temperature: In Celsius.
Weather Description: Textual description of the current weather.
Weather Icon: Visual representation of the current weather.
Country Flag: Visual representation of the country flag.
Humidity: Displayed as a percentage.
Wind Speed: In kilometers per hour.

# Technology Stack
HTML & CSS: For structuring and styling the web application.
JavaScript: For client-side logic including API calls and DOM manipulation.

# APIs Used
OpenWeatherMap API: To fetch real-time weather data based on the city.
Country Flags API: To fetch and display country flags based on country code.
