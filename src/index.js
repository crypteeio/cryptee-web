import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './theme/semantic.less'
import TrezorConnect from 'trezor-connect'

TrezorConnect.manifest({
    email: 'INSERT YOUR EMAIL',
    appUrl: 'INSERT YOUR APP URL'
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
