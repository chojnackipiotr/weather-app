import PropTypes from 'prop-types';
import styles from './current-city.module.css';
import setIcon from '../../../helpers/setIcon';

const CurrentCity = ({data, userCityLocation}) => {
  return (
    <div className={styles.container}>
      {
        !data?.main
        ?
        'Loading data...'
        :
        <div className={styles.weather}>
          <span className={styles.city}>Weather for: {userCityLocation.toUpperCase()}, {data.sys.country}</span>
          <span className={styles.icon}>{ setIcon(data.weather[0].icon) }</span>
          <span className={styles.info}>{data.weather[0].description.toUpperCase()}</span>
          <span className={styles.condition}>Temperature: {data.main.temp} °C</span>
          <span className={styles.condition}>Max. temperature: {data.main.temp_max} °C</span>
          <span className={styles.condition}>Min. temperature: {data.main.temp_min} °C</span>
          <span className={styles.condition}>Pressure: {data.main.pressure} hPa</span>
          <span className={styles.condition}>Humidity: {data.main.humidity}%</span>
          <span className={styles.condition}>Wind speed: {data.wind.speed} km/h</span>
        </div>
      }
    </div>
  );
};

CurrentCity.propTypes = {
  data: PropTypes.shape({
    main: PropTypes.shape({
      temp: PropTypes.number,
      temp_max: PropTypes.number,
      temp_min: PropTypes.number,
      humidity: PropTypes.number,
      pressure: PropTypes.number,
    }),
    sys: PropTypes.shape({
      country: PropTypes.string,
    }),
    weather: PropTypes.arrayOf(PropTypes.shape({
      description: PropTypes.string,
      icon: PropTypes.string,
    })),
    wind: PropTypes.shape({
      speed: PropTypes.number
    }),
  }),
  userCityLocation: PropTypes.string,
};

export default CurrentCity;
