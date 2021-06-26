import AppLogo from '../../_reusable/app-logo/app-logo';
import SearchForm from '../../_reusable/search-form/search-form';

const Header = () => {
  return (
    <div className='w-screen p-8 flex justify-between items-center'>
      <AppLogo className='text-5xl' />
      <SearchForm
        formClassName={'h-12 flex'}
        inputClassName={'w-96 border-b-2 border-black-600'}
      />
    </div>
  );
};

export default Header;
