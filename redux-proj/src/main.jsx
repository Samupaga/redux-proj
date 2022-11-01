import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {legacy_createStore as createStore} from 'redux';
import allReducers from './reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

const store = createStore(allReducers, devToolsEnhancer());

ReactDOM.createRoot(document.getElementById('root')).render(<Provider store={store}><App /></Provider>)
