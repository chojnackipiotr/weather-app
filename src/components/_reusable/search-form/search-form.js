import {useState} from 'react';
import PropTypes from 'prop-types';
import inputValidator from '../../../helpers/input-validator';

const SearchForm = ({formClassName, inputClassName, submitClassName}) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    error && setError('');

    const errorMessage = inputValidator(value);
    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    console.log('eee')
  }

  return (
    <form
      onSubmit={onSubmit}
      className={formClassName}
    >
      <input
        aria-label='city-search'
        className={inputClassName}
        onChange={handleChange}
        placeholder='Enter city'
        type='text'
        value={value}
      />
      <input
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
