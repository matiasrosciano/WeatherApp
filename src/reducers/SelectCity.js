import { SET_CITY, ADD_CITY } from './../actions'


export const HandleCity = (state, action) => {
    switch (action.type){
        case SET_CITY:
            return {...state, city: action.value}
        case ADD_CITY:
            return {...state, weathers: [...state.weathers,action.value]}
        default:
            return state
    }
    
}
