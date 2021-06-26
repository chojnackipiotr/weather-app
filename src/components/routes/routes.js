import {Route, Switch} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import CityData from '../city-data/city-data';
import NotFound from '../not-found/not-found';

const Routes = props => {
  return (
      <Switch>
        <Route path={'/'} exact={true}>
          <MainPage />
        </Route>
        <Route path={'/city/:id'} exact={true}>
          <CityData />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
  );
};

Routes.propTypes = {

};

export default Routes;
