import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import store from './store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme();

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <Router basename={process.env.PUBLIC_URL}>
                <App />
            </Router>
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
