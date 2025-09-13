import axios from 'axios';
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { 
  Search, 
  Thermometer, 
  Droplets, 
  Cloud, 
  CloudRain, 
  Sun, 
  Wind, 
  Eye, 
  Gauge,
  MapPin,
  Calendar,
  Clock
} from 'lucide-react';
import './Weather.css';
import Layout from '../layout/layout';

const API_KEY = 'e5c8599ea0d4e629b9c4b26806e485cc'; // Replace with your OpenWeatherMap API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!city) {
      setError('कृपया शहर का नाम दर्ज करें।');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(BASE_URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric',
        },
      });

      const data = response.data;

      const weatherData = {
        city: data.city.name,
        country: data.city.country,
        current_temp: Math.round(data.list[0].main.temp),
        feels_like: Math.round(data.list[0].main.feels_like),
        temp_min: Math.round(data.list[0].main.temp_min),
        temp_max: Math.round(data.list[0].main.temp_max),
        humidity: data.list[0].main.humidity,
        pressure: data.list[0].main.pressure,
        wind_speed: data.list[0].wind?.speed || 0,
        visibility: data.list[0].visibility || 10000,
        description: data.list[0].weather[0].description,
        icon: data.list[0].weather[0].icon,
        rain_prediction: data.list[0].rain ? true : false,
        future_temps: data.list.slice(0, 8).map((item, index) => ({
          time: index === 0 ? 'Now' : item.dt_txt.split(' ')[1].substring(0, 5),
          value: Math.round(item.main.temp),
          date: item.dt_txt.split(' ')[0],
        })),
        future_humidity: data.list.slice(0, 8).map((item, index) => ({
          time: index === 0 ? 'Now' : item.dt_txt.split(' ')[1].substring(0, 5),
          value: item.main.humidity,
          date: item.dt_txt.split(' ')[0],
        })),
        hourly_forecast: data.list.slice(0, 8).map((item) => ({
          time: item.dt_txt.split(' ')[1].substring(0, 5),
          temp: Math.round(item.main.temp),
          icon: item.weather[0].icon,
          description: item.weather[0].description,
          humidity: item.main.humidity,
        })),
      };

      setWeatherData(weatherData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('मौसम डेटा प्राप्त करने में असफल। कृपया पुनः प्रयास करें।');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const getWeatherAdvice = (temp, humidity, description) => {
    if (temp > 35) {
      return "गर्मी अधिक है - फसलों को पानी दें और छाया प्रदान करें";
    } else if (temp < 10) {
      return "ठंड है - फसलों को ढकें और पाले से बचाएं";
    } else if (humidity > 80) {
      return "नमी अधिक है - कवक रोग से सावधान रहें";
    } else if (description.includes('rain')) {
      return "बारिश होने वाली है - कटाई और छिड़काव स्थगित करें";
    }
    return "मौसम खेती के लिए उपयुक्त है";
  };

  return (
    <Layout>
      <div className="weather-dashboard">
        {/* Hero Section */}
        <div className="weather-hero">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-hindi">मौसम पूर्वानुमान</span>
              <span className="title-english">Weather Forecast</span>
            </h1>
            <p className="hero-subtitle">
              Get accurate weather predictions for better farming decisions
            </p>
            
            {/* Search Section */}
            <div className="search-section">
              <div className="search-container">
                <div className="search-input-wrapper">
                  <MapPin className="search-icon" size={20} />
                  <input
                    type="text"
                    placeholder="शहर का नाम दर्ज करें... (Enter city name)"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="search-input"
                  />
                </div>
                <button 
                  onClick={handleSearch} 
                  className="search-button" 
                  disabled={loading}
                >
                  {loading ? (
                    <div className="loading-spinner"></div>
                  ) : (
                    <>
                      <Search size={18} />
                      <span>खोजें</span>
                    </>
                  )}
                </button>
              </div>
              
              {error && (
                <div className="error-message">
                  <span className="error-icon">⚠️</span>
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>

        {weatherData && (
          <div className="weather-content">
            <div className="content-container">
              {/* Current Weather Card */}
              <div className="current-weather-card">
                <div className="current-weather-header">
                  <div className="location-info">
                    <h2 className="city-name">{weatherData.city}, {weatherData.country}</h2>
                    <div className="current-time">
                      <Clock size={16} />
                      <span>{new Date().toLocaleString('hi-IN')}</span>
                    </div>
                  </div>
                  <div className="weather-icon-large">
                    <img 
                      src={`https://openweathermap.org/img/wn/${weatherData.icon}@4x.png`}
                      alt={weatherData.description}
                    />
                  </div>
                </div>
                
                <div className="current-temp-section">
                  <div className="main-temp">{weatherData.current_temp}°C</div>
                  <div className="temp-details">
                    <span>Feels like {weatherData.feels_like}°C</span>
                    <span className="temp-range">
                      {weatherData.temp_min}° / {weatherData.temp_max}°
                    </span>
                  </div>
                  <div className="weather-description">
                    {weatherData.description.charAt(0).toUpperCase() + weatherData.description.slice(1)}
                  </div>
                </div>

                {/* Farming Advice */}
                <div className="farming-advice">
                  <div className="advice-icon">🌾</div>
                  <div className="advice-text">
                    {getWeatherAdvice(weatherData.current_temp, weatherData.humidity, weatherData.description)}
                  </div>
                </div>
              </div>

              {/* Weather Metrics Grid */}
              <div className="weather-metrics-grid">
                <div className="metric-card humidity">
                  <div className="metric-header">
                    <Droplets className="metric-icon" />
                    <span className="metric-label">Humidity / नमी</span>
                  </div>
                  <div className="metric-value">{weatherData.humidity}%</div>
                  <div className="metric-bar">
                    <div 
                      className="metric-fill" 
                      style={{ width: `${weatherData.humidity}%` }}
                    ></div>
                  </div>
                </div>

                <div className="metric-card pressure">
                  <div className="metric-header">
                    <Gauge className="metric-icon" />
                    <span className="metric-label">Pressure / दबाव</span>
                  </div>
                  <div className="metric-value">{weatherData.pressure} hPa</div>
                  <div className="metric-bar">
                    <div 
                      className="metric-fill" 
                      style={{ width: `${(weatherData.pressure - 950) / 100 * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="metric-card wind">
                  <div className="metric-header">
                    <Wind className="metric-icon" />
                    <span className="metric-label">Wind / हवा</span>
                  </div>
                  <div className="metric-value">{weatherData.wind_speed} m/s</div>
                  <div className="metric-bar">
                    <div 
                      className="metric-fill" 
                      style={{ width: `${Math.min(weatherData.wind_speed * 10, 100)}%` }}
                    ></div>
                  </div>
                </div>

                <div className="metric-card visibility">
                  <div className="metric-header">
                    <Eye className="metric-icon" />
                    <span className="metric-label">Visibility / दृश्यता</span>
                  </div>
                  <div className="metric-value">{(weatherData.visibility / 1000).toFixed(1)} km</div>
                  <div className="metric-bar">
                    <div 
                      className="metric-fill" 
                      style={{ width: `${Math.min(weatherData.visibility / 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Charts Section */}
              <div className="charts-section">
                <div className="chart-card">
                  <div className="chart-header">
                    <Thermometer className="chart-icon" />
                    <h3 className="chart-title">Temperature Forecast / तापमान पूर्वानुमान</h3>
                  </div>
                  <div className="chart-container">
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={weatherData.future_temps}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(74, 124, 89, 0.1)" />
                        <XAxis 
                          dataKey="time" 
                          tick={{ fill: '#5d7c5d', fontSize: 12 }}
                          axisLine={{ stroke: '#4a7c59' }}
                        />
                        <YAxis 
                          tick={{ fill: '#5d7c5d', fontSize: 12 }}
                          axisLine={{ stroke: '#4a7c59' }}
                        />
                        <Tooltip 
                          contentStyle={{
                            backgroundColor: 'white',
                            border: '1px solid #4a7c59',
                            borderRadius: '8px',
                            boxShadow: '0 4px 12px rgba(45, 80, 22, 0.1)'
                          }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="value" 
                          stroke="#4a7c59" 
                          strokeWidth={3}
                          dot={{ fill: '#4a7c59', strokeWidth: 2, r: 4 }}
                          activeDot={{ r: 6, fill: '#2d5016' }}
                          name="Temperature (°C)" 
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="chart-card">
                  <div className="chart-header">
                    <Droplets className="chart-icon" />
                    <h3 className="chart-title">Humidity Forecast / नमी पूर्वानुमान</h3>
                  </div>
                  <div className="chart-container">
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={weatherData.future_humidity}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(74, 124, 89, 0.1)" />
                        <XAxis 
                          dataKey="time" 
                          tick={{ fill: '#5d7c5d', fontSize: 12 }}
                          axisLine={{ stroke: '#4a7c59' }}
                        />
                        <YAxis 
                          tick={{ fill: '#5d7c5d', fontSize: 12 }}
                          axisLine={{ stroke: '#4a7c59' }}
                        />
                        <Tooltip 
                          contentStyle={{
                            backgroundColor: 'white',
                            border: '1px solid #4a7c59',
                            borderRadius: '8px',
                            boxShadow: '0 4px 12px rgba(45, 80, 22, 0.1)'
                          }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="value" 
                          stroke="#7cb342" 
                          strokeWidth={3}
                          dot={{ fill: '#7cb342', strokeWidth: 2, r: 4 }}
                          activeDot={{ r: 6, fill: '#4a7c59' }}
                          name="Humidity (%)" 
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Hourly Forecast */}
              <div className="hourly-forecast-section">
                <div className="section-header">
                  <Calendar className="section-icon" />
                  <h3 className="section-title">Hourly Forecast / घंटेवार पूर्वानुमान</h3>
                </div>
                <div className="hourly-forecast-container">
                  {weatherData.hourly_forecast.map((hour, index) => (
                    <div key={index} className="hourly-item">
                      <div className="hourly-time">{hour.time}</div>
                      <div className="hourly-icon">
                        <img 
                          src={`https://openweathermap.org/img/wn/${hour.icon}@2x.png`}
                          alt={hour.description}
                        />
                      </div>
                      <div className="hourly-temp">{hour.temp}°</div>
                      <div className="hourly-humidity">{hour.humidity}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Weather;