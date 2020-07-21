

const PLACE = "PLACE";


export interface placeType {
    id?:number,
    coords:string,
    name:string
}

export interface coordsPlaceType {
        id?:number|undefined,
        lat?:number|undefined,
        lng?:number|undefined
}



export interface actionCreatePlace{
    type: typeof PLACE
    coords: coordsPlaceType;
}

export const selectedPlace = (items:Array<placeType>,id:number):placeType|undefined => {
    return items.find(item=>item.id===id)
};



export const setSelectedPlace = (place:placeType):actionCreatePlace => {
    const placeCoord:Array<string> = place.coords.split(',');
    return{
        type: PLACE,
        coords: {
            id:place.id,
            lat: +(placeCoord[0].trim()),
            lng: +(placeCoord[1].trim())
        }
    }
};


export function HerePlace(state={},action:actionCreatePlace):coordsPlaceType|{}{
    switch (action.type) {
        case PLACE : {
            return action.coords
        }

        default : {
            return state
        }
    }
}
