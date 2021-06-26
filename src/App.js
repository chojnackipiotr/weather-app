import {BrowserRouter as Router} from 'react-router-dom';
import Layout from './components/layout/layout';
import Routes from './components/routes/routes';

import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  );
}

export default App;
