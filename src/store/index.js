import { createStore } from 'redux'
import { SelectCity } from './../reducers/SelectCity'

const initialState = {}

export const store = createStore(SelectCity, initialState, 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
