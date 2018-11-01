import React from 'react'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux';
import EncryptText from './components/encrypt-text';
import DecryptText from './components/decrypt-text';
import EncrypteFile from './components/encrypt-file';
import DecryptFile from './components/decrypt-file';
import Faq from './pages/faq';
import Home from './pages/home';
import About from './pages/about';
import { Provider } from 'react-redux'
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import DesktopContainer from './layout/desktop-container'
import MobileContainer from './layout/mobile-container'
import { createBrowserHistory } from 'history'
import configureStore from './configure-store'

momentDurationFormatSetup(moment);

// Create browser history to use in the Redux store
const history = createBrowserHistory();
const store = configureStore(history);

const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/encrypt/text', component: EncryptText, exact: true },
  { path: '/encrypt/file', component: EncrypteFile, exact: true },
  { path: '/decrypt/text', component: DecryptText, exact: true },
  { path: '/decrypt/file', component: DecryptFile, exact: true },
  { path: '/faq', component: Faq, exact: true },
  { path: '/about', component: About, exact: true }]

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>        
        <DesktopContainer>
          { routes.map(route => <Route key={route.path} {...route} />) }
        </DesktopContainer>
        <MobileContainer>
          { routes.map(route => <Route key={route.path} {...route} component={() => <route.component mobile />} />) }
        </MobileContainer>
      </div>
    </ConnectedRouter>
  </Provider>
)

export default App