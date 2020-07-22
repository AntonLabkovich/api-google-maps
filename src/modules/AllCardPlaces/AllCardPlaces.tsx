import React from 'react';
import {connect} from "react-redux";

import {LinearProgress} from '@material-ui/core';
import './AllCardPlaces.scss'
import CardPlace from "../../components/cardPlace/cardPlace";
import {getPlacesThunk} from "../../useredux/action/places";
import {selectedPlace, setSelectedPlace, placeType, coordsPlaceType} from "../../useredux/reducers/herePlace"
import {globalStateType} from "../../useredux/reducers/combineReducers";
import {compose} from 'redux';


interface IProps {}

interface ImapStateToPropsType {
    isLoading: boolean,
    hasErrored: boolean,
    places: Array<placeType>,
    thisPlace: coordsPlaceType,
}

interface ImapDispatchToPropsType {
    fetchData: (url:string, oldProp:Array<placeType>)=>Array<placeType>
    setSelectedPlace: (place: placeType) => coordsPlaceType
}

type IallProps = ImapDispatchToPropsType & ImapStateToPropsType & IProps


interface IState {
    timerID: any
}


class AllCard extends React.Component<IallProps, IState> {
    constructor(props:IallProps){
        super(props);
        this.state = {
            timerID: 0
        };
    }

    componentDidMount() {
        this.props.fetchData('api/endpoint/plases.json', this.props.places);
        let intervalID = setInterval(() => {
            this.props.fetchData('api/endpoint/plases.json', this.props.places);
        }, 3000);
        this.setState({
            timerID: intervalID
        })

    }

    selectPlace = (id:number) => {
        const place:any = selectedPlace(this.props.places, id);
        this.props.setSelectedPlace(place)
    };

    render() {
        if(this.props.hasErrored){
            return <p style={{position: "absolute", right: "0", top: '0', bottom: "0", width: '24%'}}> что-то пошло не так</p>}
        return (
            <>
            {this.props.isLoading ? <div style={{position: "absolute", right: "0", top: '0', bottom: "0", width: '24%'}}><LinearProgress/></div> :
                    <div className="cards"
                         style={{position: "absolute", right: "0", top:"50px", width: '24%'}}>
                        {this.props.places.map((item) =>
                            <CardPlace
                                palceItem={item}
                                key={item.id}
                                selectPlaceClick={this.selectPlace}
                                seclectedPlace={this.props.thisPlace}
                            />
                        )}
                    </div>}
            </>
        );
    }
    componentWillUnmount() {
        clearInterval(this.state.timerID);
    }
}


const mapStateToProps = (store:globalStateType):ImapStateToPropsType => {
    return {
        isLoading: store.isLoadingPlace,
        hasErrored: store.hasErroredPlace,
        places: store.Place,
        thisPlace: store.HerePlace,
    }
};

const mapDispatchToProps = (dispatch:any):ImapDispatchToPropsType => {
    return {
        fetchData: (url:string, oldProp:Array<placeType>) => dispatch(getPlacesThunk(url, oldProp)),
        setSelectedPlace: (place:placeType) => dispatch(setSelectedPlace(place))
    };
};

export default compose (connect(mapStateToProps, mapDispatchToProps)(AllCard))


