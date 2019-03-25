import { ADD_CITY } from './../actions'

export const AddCity = (state,action) => {
    switch (action.type){
        case ADD_CITY:
            return state          
        default:
            return state
    }
}