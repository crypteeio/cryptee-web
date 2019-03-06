import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './theme/semantic.less'
import TrezorConnect from 'trezor-connect'

TrezorConnect.manifest({
    email: 'cryptee.io@gmail.com',
    appUrl: 'https://cryptee.io'
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
