import React, {ChangeEvent} from "react";
import {Redirect} from 'react-router-dom';
import './auth.scss'

import {Paper, TextField, Button, Checkbox, FormControlLabel,CircularProgress} from '@material-ui/core';


interface IProps {}
interface IState {
    valuePas: string,
    valueName: string,
    remember: boolean,
    login:number,
    loading: boolean
}

type User = {
    id:number,
    name:string,
    password:string
}



export default class Auth extends React.Component<IProps, IState> {

    constructor(props:IProps) {
        super(props);
        this.state = {
            valuePas: '',
            valueName: '',
            remember: false,
            login:0,
            loading: false
        }
    }

    render() {
        if(this.state.login===0||this.state.login===-1)
        return (
            <div className={"auth"}>
                {!this.state.loading?<Paper className={"auth-containerForm"}>
                    <form>
                        {this.state.login===-1?<div>
                            <p>Нет такого пользователя</p>
                        </div>:null}
                        <p>Info - use name: Anton, password: 1234 </p>
                        <div>
                            <TextField id="name" label="Name" variant="outlined"
                                       className={'auth-containerForm-textinput'}
                                       onChange={this.handleChange}
                                       error={!this.state.valueName}
                                       required/>
                            <TextField id="password" label="Password"
                                       variant="outlined" type="password"
                                       onChange={this.handleChange}
                                       className={'auth-containerForm-textinput'}
                                       error={!this.state.valuePas}
                                       required/>
                        </div>
                        <div>
                            <Button variant="contained" color="primary"
                                    disabled={this.state.valuePas && this.state.valueName ? false : true}
                            onClick={this.handleClick}>
                                Авторизоваться
                            </Button>
                            <FormControlLabel
                                control={
                                    <Checkbox checked={this.state.remember} color="primary" onChange={this.handleClickCheck}/> } label="Запомнить" />
                        </div>
                    </form>
                </Paper>:<CircularProgress className={'progress'}/>}
            </div>
        );
        return <Redirect to="/api-google-maps"/>;
    }

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        switch (e.target.id) {
            case "name": {
                this.setState({
                    valueName: e.target.value
                });
                return
            }
            case "password": {
                this.setState({
                    valuePas: e.target.value
                });
                return;
            }
            default:
                return;
        }
    };
    handleClickCheck = () => {
        this.setState({
            remember: !this.state.remember
        })
    };

    handleClick = () => {
        let ok:boolean = false;
        this.setState({
            loading: true
        });
        fetch('https://antonlabkovich.github.io/api-google-maps/api/endpoint/users.json')
            .then(res=>res.json())
            .then((users)=>{
                ok = users.some((item:User)=>item.name.toUpperCase()===this.state.valueName.toUpperCase()&&item.password===this.state.valuePas);
                if(this.state.remember && ok){
                    document.cookie = "login=true; max-age=3600";
                    this.setState({
                        login: 1,
                        loading: false,
                        valuePas: '',
                        valueName: ''
                    })
                }else if(ok){
                    document.cookie = "login=true";
                    this.setState({
                        login: 1,
                        loading: false,
                        valuePas: '',
                        valueName: ''
                    })
                }else{
                    this.setState({
                        login: -1,
                        loading: false,
                        valuePas: '',
                        valueName: ''
                    })
                }
            });
    }
}








