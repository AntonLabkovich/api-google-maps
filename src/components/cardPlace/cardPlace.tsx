import React, {FC} from 'react';

import Card from '@material-ui/core/Card';
import {coordsPlaceType, placeType} from "../../useredux/reducers/herePlace";

type propsTypeOneCard = {
    palceItem:any
    selectPlaceClick: (id:number)=>void
    seclectedPlace:coordsPlaceType
}


export default function CardPlace(props:propsTypeOneCard) {
    return (
        <Card
              onClick={()=>props.selectPlaceClick(props.palceItem.id) }
              raised={props.seclectedPlace.id === props.palceItem.id}>
            <p>{props.palceItem.name}</p>
        </Card>
    );
}






