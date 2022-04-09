import React from "react";
// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import LogInComponent from "./components/LogInComponent";
import RegisterNewMemberComponent from "./components/RegisterNewMemberComponent";
import ArticleListComponent from "./components/ArticleListComponent";
import ArticleComponent from "./components/ArticleComponent";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Redirect exact from="/" to="/home"/>
                    <Route path="/home" component ={ArticleListComponent}/>
                    <Route path="/article/:id" component ={ArticleComponent}/>
                    <Route path="/login" component ={LogInComponent}/>
                    <Route path="/register" component ={RegisterNewMemberComponent}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
