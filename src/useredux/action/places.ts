import {placeType} from "../reducers/herePlace";
import {Dispatch} from "redux";
import thunk from 'redux-thunk'

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const ITEMS_HAS_ERRORED = 'ITEMS_HAS_ERRORED';
export const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING';



export type actionCreateSetPlaces = {
    type: typeof FETCH_ITEMS,
    data: Array<placeType>
}

export type actionCreateErrored = {
    type: typeof ITEMS_HAS_ERRORED,
    hasErrored: boolean,
}

export type actionCreateLoading = {
    type: typeof ITEMS_IS_LOADING,
    isLoading: boolean
}

export const setPlaces = (data:Array<placeType>):actionCreateSetPlaces=> {
    return{
        type: FETCH_ITEMS,
        data: data
    }
};

export const fetchingHasErrored = (hasErrored=false):actionCreateErrored=> {
    return{
        type: ITEMS_HAS_ERRORED,
        hasErrored: hasErrored
    };
};

export const itemIsLoading = (isLoading=false):actionCreateLoading => {
    return {
        type: ITEMS_IS_LOADING,
        isLoading: isLoading
    };
};



export const getPlacesThunk = (url:string,oldProp:Array<placeType>) =>{
    return (dispatch:Dispatch):void => {
        if(oldProp.length===0){
            dispatch(itemIsLoading(true));}
        fetch(url,{
            cache:"no-cache"
        })
            .then((res) => {
                if(oldProp.length===0){
                    dispatch(itemIsLoading(false));}
                return res
            })
            .then((res)=>res.json())
            .then((items:Array<placeType>)=>dispatch(setPlaces(items)))
            .catch(()=>dispatch(fetchingHasErrored(true)))
    }
};


