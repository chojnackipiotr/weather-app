import styles from './main-page.module.css';
import SearchForm from '../_reusable/search-form/search-form';

const MainPage = props => {
  return (
    <div className={styles.container}>
      <h1 className={styles.headerMain}>
        Welcome to Weatherly.APP!
      </h1>
      <h2 className={styles.headerSecondary}>
        Check the weather in cities around the globe <span role='img' aria-label='emoji-earth'>🌍</span>
      </h2>
      <h3 className={styles.headerSecondary}>
        Type city name below and check actual weather!
      </h3>
      <SearchForm
        formClassName={styles.formMain}
        inputClassName={styles.inputMain}
        submitClassName={styles.mainSubmit}
      />
    </div>
  );
};

MainPage.propTypes = {

};

export default MainPage;
