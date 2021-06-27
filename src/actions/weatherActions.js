import fetchCityData from '../helpers/api';
import * as weather from '../actionTypes/weatherActionTypes';

export const fetchDefaultCitiesData = () => {
  return dispatch => {
    const tokyo = fetchCityData('Tokyo');
    const cracow = fetchCityData('Krakow');
    const losAngeles = fetchCityData('Los%20Angeles');

    Promise.all([tokyo, cracow, losAngeles])
      .then(res => {
        dispatch({
          type: weather.SET_DEFAULT_CITY_DATA,
          payload: res,
        });
      })
      .catch(() => {
        dispatch({
          type: weather.SET_DEFAULT_CITY_DATA,
          payload: [],
        });
      });
  };
};

export const fetchSingleCityData = cityName => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      fetchCityData(cityName)
        .then(res => {

          if (res?.main) {
            dispatch({
              type: weather.SET_CURRENT_CITY_DATA,
              payload: res,
            })

            resolve('success')
          } else {
            reject(res);
          }
        })
        .catch(err => reject(err))
    })
  }
}
