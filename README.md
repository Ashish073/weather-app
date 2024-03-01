# Simple Weather App

This is a simple weather app done using ReactJS and Tailwind that allows you to check weather of certain cities using the GeoDB Cities api from RapidApi and the OpenWeather api.

## Getting Started
These instructions will guide you on how to set up the project on your local machine for development and testing purposes.

## Prerequisites
Make sure you have the following prerequisites installed on your machine:

Node.js
npm (Node Package Manager)

## Installation
1. Clone the repository to your local machine:
git clone [https://github.com/ashish073/weather-app.git](https://github.com/ashish073/weather-app.git)

2. Change to the project directory:
```bash
cd weather-app
```
3. Install dependencies:
```bash
npm install
```

4. Additional dependencies for tailwind using postcss:
Please follow below link for the setup process of tailwind using postcss.
[https://tailwindcss.com/docs/installation/using-postcss](https://tailwindcss.com/docs/installation/using-postcss)

6. Create a .env file in the project root and add the following keys:
```bash
VITE_WEATHER_API_KEY=*OPEN WEATHER API KEY*
VITE_GEOLOC_API_HOST=wft-geo-db.p.rapidapi.com
VITE_WEATHER_API_URL=https://api.openweathermap.org/data/2.5
VITE_GEOLOC_API_URL=https://wft-geo-db.p.rapidapi.com/v1/geo
VITE_GEOLOC_API_KEY=*GEODB CITIES API KEY*
```
Website for the GeoDB Cities Rapid Api [https://rapidapi.com/wirefreethought/api/geodb-cities](https://rapidapi.com/wirefreethought/api/geodb-cities)

Replace the placeholder values with your actual API keys.

6. Start the development server:
```bash
npm run dev
```
The project should now be running locally. Open your browser and navigate to [http://localhost:5173](http://localhost:5173) to view the application.

## Contributing
 
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## License:
MIT License
Copyright (c) 2024 Ashish Karpurkar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
