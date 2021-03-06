import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/AppContainer/AppContainer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppContainer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
