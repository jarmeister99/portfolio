import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

// wrap application in <Provider> so that store is available throughout component tree 
// - this allows usage of useSelector, useDispatch hooks
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

