import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";

import MapsContainer from '../../modules/mapsContainer/maps-container';
import AllCard from "../../modules/AllCardPlaces/AllCardPlaces";

import './mapsPage.scss'
import { Button } from '@material-ui/core';

interface IPropsMaps {
    cookie:boolean
}


export default class MapsPage extends React.Component<IPropsMaps> {
    constructor(props:IPropsMaps){
        super(props);
        this.state = {
            cookie: true
        }
    }

    setCookie = (name:string, value:string, options:any) => {

        options = {
            path: '/',
            ...options
        };

        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }

        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

        for (let optionKey in options) {
            updatedCookie += "; " + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            }
        }

        document.cookie = updatedCookie;
    };

    deleteCookie = (name:string) => {
        this.setCookie(name, "", {
            'max-age': -1
        });
        this.forceUpdate();
    };

    getCookie = ():string|undefined => {
        let matches:Array<string>|null = document.cookie.match(new RegExp(
            "(?:^|; )" + 'login'.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    };

    render(){
        if(this.getCookie())
            return (
                <div className="maps-page">
                    <MapsContainer/>
                    <AllCard/>
                </div>
            );
        return <Redirect to="/"/>;
        }
}







