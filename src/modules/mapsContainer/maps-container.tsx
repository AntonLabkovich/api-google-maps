import React from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import {CircularProgress} from '@material-ui/core';
import {connect} from "react-redux";

import './maps-container.scss';
import {globalStateType} from "../../useredux/reducers/combineReducers";
import {coordsPlaceType, placeType, setSelectedPlace} from "../../useredux/reducers/herePlace";



interface IMapsContainerState {
    loading:boolean
}

interface ownProps {
    google:any
}

interface IMapsContainerProps {
    HerePlace:coordsPlaceType,

}

interface ImapDispatchToPropsType{
    setSelectedPlace: (place: placeType) => coordsPlaceType
}

type fullPropsType = ImapDispatchToPropsType & IMapsContainerProps & ownProps;

class MapsContainer extends React.Component<fullPropsType, IMapsContainerState> {
    constructor(props:fullPropsType){
        super(props);
        this.state = {
            loading:false
        }
    }

    componentDidMount() {

    }

    render(){
        return (
        <Map google={this.props.google}
             zoom={17}
            // @ts-ignore
             style={{width:'75%'}}
            // @ts-ignore
             center={{ lat: +this.props.HerePlace.lat,
                        lng: +this.props.HerePlace.lng}}>

            <Marker
            // @ts-ignore
            position={{ lat: +this.props.HerePlace.lat, lng: +this.props.HerePlace.lng}} />
        </Map>
    );}
}

const LoadingContainer = () => (
    <div className={'preloader-continer'}><CircularProgress/></div>
);


const mapStateToProps = (store:globalStateType):IMapsContainerProps=>{
    return {
        HerePlace:store.HerePlace
    }
};

const mapDispatchToProps = (dispatch:any):ImapDispatchToPropsType => {
    return {
        setSelectedPlace: (place:placeType) => dispatch(setSelectedPlace(place))
    };
};


export default GoogleApiWrapper({
    apiKey: ('AIzaSyCkvXjd0sh8FZZ7v_Y-0Ib0_cpr2R3Kpng'),
    LoadingContainer: LoadingContainer,
})(connect(mapStateToProps, mapDispatchToProps)(MapsContainer));


