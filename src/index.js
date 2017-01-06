import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import reducers from './reducers';
import routes from './routes.js';
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router 
    	onUpdate={() => window.scrollTo(0, 0)} 
    	history={appHistory} 
    	routes={ routes } 
    />
  </Provider>
  , document.querySelector('.container')
);
