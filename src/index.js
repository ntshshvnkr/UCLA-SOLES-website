import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/app';
import Firebase, { FirebaseContext } from './components/firebase';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
	<FirebaseContext.Provider value={new Firebase()}>
	  <App />
	</FirebaseContext.Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
