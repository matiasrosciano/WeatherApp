import { SET_CITY } from './../actions'


export const SelectCity = (state, action) => {
    switch (action.type){
        case SET_CITY:
            return {...state, city: action.value}
        default:
            return state
    }
    
}