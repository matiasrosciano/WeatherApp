import { ADD_CITY } from '../actions'

export const AddCity = (state = null,action) =>{
    switch (action.type){
        case ADD_CITY:
            console.log(action.value)
            return [...state,action.value]
        default:
            return state
    }
}
