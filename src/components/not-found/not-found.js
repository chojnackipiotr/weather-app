import {useLocation} from 'react-router-dom';
import LargeContent from '../_reusable/large-content/large-content';
const NotFound = () => {
  const {pathname} = useLocation();
  const locationNotFound = pathname.includes('location-not-found');
  const h1Text = locationNotFound ? 'Ups... This location can\'t be find' : 'Ups... 404 - Page not found';
  const h2Text = locationNotFound ? 'Please try again and type city name' : 'To find information about weather type city name';
  const h3Text = 'Access current weather data for any location including over 200,000 cities';
  return (
    <div>
      <LargeContent
        h1Text={h1Text}
        h2Text={h2Text}
        h3Text={h3Text}
      />
    </div>
  );
};

export default NotFound;
