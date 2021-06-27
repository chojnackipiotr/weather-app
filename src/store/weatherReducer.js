import * as weather from '../actionTypes/weatherActionTypes'

const initialState = {
  defaultCitiesData: [],
  currentCityData: {},
  isLoading: false,
  appError: false,
}

export function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case weather.SET_CURRENT_CITY_DATA:
      return {
        ...state,
        currentCityData: action.payload,
      }
    case weather.SET_DEFAULT_CITY_DATA:
      return {
        ...state,
        defaultCitiesData: action.payload,
      }
    default:
      return state;
  }
}

//Selectors
export const getDefaultCitiesData = state => state.weather.defaultCitiesData;
export const getCurrentCityData = state => state.weather.currentCityData;
export const getIsLoading = state => state.weather.isLoading;
