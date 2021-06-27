import React from 'react';
import PropTypes from 'prop-types';
import styles from './large-content.module.css';
import background from '../../../static/images/main-background.jpg';
import SearchForm from '../search-form/search-form';

const LargeContent = ({h1Text, h2Text, h3Text}) => {
  return (
    <div
      className={styles.container}
      style={{backgroundImage: `url(${background})`}}
    >
      <h1 className={styles.headerMain}>
        {h1Text}
      </h1>
      <h2 className={styles.headerSecondary}>
        {h2Text}
      </h2>
      <h3 className={styles.headerSecondary}>
        {h3Text}
      </h3>
      <SearchForm
        formClassName={styles.formMain}
        inputClassName={styles.inputMain}
        submitClassName={styles.mainSubmit}
      />
    </div>
  );
};

LargeContent.propTypes = {
  h1Text: PropTypes.string,
  h2Text: PropTypes.string,
  h3Text: PropTypes.string,
};

export default LargeContent;
