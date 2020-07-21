import {
    FETCH_ITEMS,
    ITEMS_HAS_ERRORED,
    ITEMS_IS_LOADING,
    actionCreateSetPlaces,
    actionCreateErrored,
    actionCreateLoading
} from "../action/places";



import {placeType} from "./herePlace";


export function Place(state = [], action:actionCreateSetPlaces):Array<placeType>|[] {
    switch (action.type) {
        case FETCH_ITEMS : {
            if(JSON.stringify(action.data)!==JSON.stringify(state)){
                return action.data
            }
            return state

        }
        default : {
            return state
        }
    }
}

export function isLoadingPlace(state = false, action:actionCreateLoading):boolean {
    switch (action.type) {
        case ITEMS_IS_LOADING : {
            return action.isLoading
        }

        default:
            return state
    }
}


export function hasErroredPlace(state = false, action:actionCreateErrored):boolean {
    switch (action.type) {
        case ITEMS_HAS_ERRORED : {
            return action.hasErrored
        }
        default:
            return state
    }
}
