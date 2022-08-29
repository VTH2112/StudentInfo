import { createStore } from 'redux'
// import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers'

export const store = createStore(
    reducer,
)