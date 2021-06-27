import PropTypes from 'prop-types';
import styles from './default-cities-list-item.module.css';
import setIcon from '../../../../helpers/setIcon';
import compareCities from '../../../../helpers/compareCities';

const DefaultCitiesListItem = ({cityData, currentCityData, userCityLocation}) => {
  return (
    <li className={styles.container}>
      <span className={styles.city}>
        {cityData.name}, {cityData.sys.country}
      </span>
      <span className={styles.condition}>
        {setIcon(cityData.weather[0].icon)}
      </span>
      <span className={styles.condition}>
        {cityData.weather[0].description.toUpperCase()}
      </span>
      <span className={styles.default}>
        Temperature: {cityData.main.temp}°C
        &nbsp;({compareCities(
          'temperature',
        cityData.main.temp - currentCityData.main.temp,
        userCityLocation
      )})
      </span>
      <span className={styles.default}>
        Pressure: {cityData.main.pressure}hPa
        &nbsp;({compareCities(
          'pressure',
        cityData.main.pressure - currentCityData.main.pressure,
        userCityLocation
      )})
      </span>
      <span className={styles.default}>
        Humidity: {cityData.main.humidity}%
        &nbsp;({compareCities(
          'humidity',
        cityData.main.humidity - currentCityData.main.humidity,
              userCityLocation
      )})
      </span>
    </li>
  );
};

DefaultCitiesListItem.propTypes = {
  cityData: PropTypes.shape({
    name: PropTypes.string,
    main: PropTypes.shape({
      temp: PropTypes.number,
      pressure: PropTypes.number,
      humidity: PropTypes.number,
    }),
    sys: PropTypes.shape({
      country: PropTypes.string,
    }),
    weather: PropTypes.arrayOf(PropTypes.shape({
      description: PropTypes.string,
      icon: PropTypes.string,
    })),
  }),
  currentCityData: PropTypes.shape({
    main: PropTypes.shape({
      temp: PropTypes.number,
      pressure: PropTypes.number,
      humidity: PropTypes.number,
    }),
  }),
  userCityLocation: PropTypes.string,
};

export default DefaultCitiesListItem;
