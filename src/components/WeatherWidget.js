import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { motion } from 'framer-motion';

const WeatherWidget = () => {
  const [temp, setTemp] = useState(null);
  const [description, setDescription] = useState(null);
  const [date, setDate] = useState(null);

  const cityName = 'Van';

  useEffect(() => {
    const getWeatherInfo = async () => {
      try {
        const weatherData = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=vancouver&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
        );
        console.log(weatherData.data);
        setTemp(weatherData.data.main.temp);
        setDescription(weatherData.data.weather[0].main);

        // get current date based on the data from the weather api
        const timezoneInMinutes = weatherData.data.timezone / 60;
        const currentDate = moment()
          .utcOffset(timezoneInMinutes)
          .format('MMM D');
        setDate(currentDate);
      } catch (err) {
        console.log(err.response.data.error);
      }
    };

    getWeatherInfo();
  }, []);
  return (
    <motion.section
      className="weather-widget"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.3 }}
    >
      <div className="weather-content">
        <div>{cityName}</div>
        {date && <div>{date}</div>}
        {temp && <div>{Math.round(temp)}&#8451;</div>}
        {description && <div>{description}</div>}
      </div>
    </motion.section>
  );
};

export default WeatherWidget;
