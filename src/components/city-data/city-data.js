import {useSelector, useDispatch} from 'react-redux';
import {useLocation, useHistory} from 'react-router-dom';
import {getCurrentCityData, getDefaultCitiesData} from '../../store/weatherReducer';
import {useEffect} from 'react';
import {fetchDefaultCitiesData, fetchSingleCityData} from '../../actions/weatherActions';
import styles from './city-data.module.css';
import CurrentCity from './current-city/current-city';
import DefaultCitiesList from './default-cities-list/default-cities-list';

const CityData = () => {
  const currentCity = useSelector(getCurrentCityData);
  const defaultCities = useSelector(getDefaultCitiesData);
  const location = useLocation();
  const {push} = useHistory();
  const dispatch = useDispatch();
  const userCityLocation = location.pathname.replace('/city/', '');

  useEffect(() => {
    if (!currentCity?.main) {
      dispatch(fetchSingleCityData(encodeURI(userCityLocation)))
        .then(() => {})
        .catch(() => {
          push('/location-not-found')
        })
    }

    if(defaultCities.length === 0) {
      dispatch(fetchDefaultCitiesData())
    }
    // eslint-disable-next-line
  }, [currentCity, defaultCities])

  return (
    <div className={styles.container}>
      <CurrentCity
        data={currentCity}
        userCityLocation={userCityLocation}
      />
      <DefaultCitiesList
        currentCityData={currentCity}
        defaultCitiesData={defaultCities}
        userCityLocation={userCityLocation}
      />
    </div>
  );
};

export default CityData;
