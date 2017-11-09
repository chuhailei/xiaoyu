import React,{Component} from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import rootReducer from './store/reducers'
import Main from './router/router'


const store = createStore(rootReducer)

console.log(store.getState())

render(
    <Main store={store} />,
    document.getElementById('root')
)