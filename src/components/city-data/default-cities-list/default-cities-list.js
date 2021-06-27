import PropTypes from 'prop-types';
import styles from './default-cities-list.module.css';
import DefaultCitiesListItem from './default-cities-list-item/default-cities-list-item';

const DefaultCitiesList = ( {currentCityData, defaultCitiesData, userCityLocation} ) => {
  return (
    <div className={styles.container }>
      <div className={styles.title}>
        Compare weather in {userCityLocation.toLocaleUpperCase()} with these cities:
      </div>
      <ul>
        {
          currentCityData?.main
          ?
          defaultCitiesData.map(city => {
            return (
              <DefaultCitiesListItem
                key={ city.sys.id }
                cityData={ city }
                currentCityData={ currentCityData }
                userCityLocation={ userCityLocation }
              />
            );
          })
          :
          'Loading data...'
        }
      </ul>
    </div>
  );
};

DefaultCitiesList.propTypes = {
  currentCityData: PropTypes.object,
  defaultCitiesData: PropTypes.array,
  userCityLocation: PropTypes.string,
};

export default DefaultCitiesList;
