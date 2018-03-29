import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router basename={process.env.PUBLIC_URL}>
                <App />
            </Router>
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
