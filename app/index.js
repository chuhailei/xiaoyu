
import React,{Component} from 'react';
import {render} from 'react-dom';
import {createStore,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers'
import App from './router/routers'


const store = createStore(rootReducer,applyMiddleware(thunkMiddleware,logger))
          


render(<App store = {store}/>, document.getElementById('root'))
