import { applyMiddleware, createStore } from 'redux'
import artReducer from './Art/artReducer'
import thunk from 'redux-thunk'

const store = createStore(artReducer, applyMiddleware(thunk));

export default store;