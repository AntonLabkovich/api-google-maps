import {combineReducers} from "redux";
import {hasErroredPlace, isLoadingPlace, Place} from "./place";
import {HerePlace} from "./herePlace";


export let rootReducer =  combineReducers({
    Place,
    HerePlace,
    hasErroredPlace,
    isLoadingPlace,
});

export type rootReducerType = typeof rootReducer;

export type globalStateType = ReturnType<rootReducerType>;
