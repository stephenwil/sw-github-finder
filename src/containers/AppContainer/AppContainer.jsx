import * as React from 'react';
// import logo from './logo.svg';
// import './App.css';
import "typeface-roboto";
// import Button from '@material-ui/core/Button';
import Layout from '../../containers/Layout/Layout';
import Router from '../../routes/Router';
import { BrowserRouter } from 'react-router-dom';

class AppContainer extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Layout />
            <Router />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default AppContainer;
