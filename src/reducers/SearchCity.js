import { SEARCH_CITY } from './../actions'

export const SearchCity = (state,action) => {
    switch (action.type){
        case SEARCH_CITY:
            return {city: action.value}
        default:
            return state
    }
}