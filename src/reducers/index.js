import { combineReducers } from 'redux'
import { AddCity } from './AddCity'
import { SetCity} from './setCity'


export default combineReducers({
    weathers: AddCity,
    city: SetCity
})
