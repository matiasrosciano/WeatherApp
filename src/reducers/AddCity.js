import { ADD_CITY } from '../actions'

export const AddCity = (state = null,action) =>{
    switch (action.type){
        case ADD_CITY:
            return [...state,action.value]
        default:
            return state
    }
}