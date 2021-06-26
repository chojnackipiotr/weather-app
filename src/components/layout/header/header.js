import styles from './header.module.css';
import AppLogo from '../../_reusable/app-logo/app-logo';
import SearchForm from '../../_reusable/search-form/search-form';

const Header = () => {
  return (
    <div className={styles.container}>
      <AppLogo className={styles.logo} />
      <SearchForm
        formClassName={styles.formClass}
        inputClassName={styles.inputClass}
        submitClassName={styles.submitClass}
      />
    </div>
  );
};

export default Header;
