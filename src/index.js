import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { configStore } from './configStore'

const store = configStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));
registerServiceWorker();
