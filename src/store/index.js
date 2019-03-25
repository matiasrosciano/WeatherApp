import { createStore } from 'redux'
import { HandleCity } from './../reducers/SelectCity'


const initialState = {
    city: "",
    weathers: []
}

export const store = createStore(HandleCity, initialState, 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
