const inputValidator = (value) => {
  const valueLength = value.length;
  let error;
  if (valueLength  === 0) {
    error = 'Ups... You forgot to type the city 🏙️'
    return error;
  }

  if (valueLength <= 2) {
    error = 'City name should contain at least 3 letters. 📚'
    return error;
  }

  return error;
};

export default inputValidator;
