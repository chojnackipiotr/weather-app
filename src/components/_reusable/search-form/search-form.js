import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import styles from './search-form.module.css';
import PropTypes from 'prop-types';
import inputValidator from '../../../helpers/input-validator';
import {fetchSingleCityData} from '../../../actions/weatherActions';

const SearchForm = ({formClassName, inputClassName, submitClassName}) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();
  const {push} = useHistory()

  const handleChange = (e) => {
    error && setError('')
    setValue(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setDisable(true);
    error && setError('');

    const errorMessage = inputValidator(value);
    if (errorMessage) {
      setError(errorMessage);
      setDisable(false);
      return;
    }

    dispatch(fetchSingleCityData(encodeURI(value)))
      .then(() => {
        setDisable(false);
        setValue('');
        push(`/city/${value.toLowerCase()}`)
      })
      .catch(err => {
        setDisable(false)
        push('/location-not-found')
      })
  }

  return (
    <form
      onSubmit={onSubmit}
      className={formClassName}
    >
      {
        error &&
          <div className={styles.error}>
            {error.toUpperCase()}
          </div>
      }
      <input
        aria-label='city-search'
        className={inputClassName}
        onChange={handleChange}
        placeholder='Enter city'
        type='text'
        value={value}
      />
      <input
        className={submitClassName}
        disabled={disable}
        type='submit'
        value='Check weather'
      />
    </form>
  );
};

SearchForm.propTypes = {
  formClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  submitClassName: PropTypes.string,
};

export default SearchForm;
