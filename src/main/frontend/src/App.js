import React from "react";
// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ArticleListComponent from "./components/ArticleListComponent";
import RegisterNewMemberComponent from "./components/RegisterNewMemberComponent";

function App() {
    return (
        <div className="container">
            <RegisterNewMemberComponent/>
            {/*<Router>*/}
            {/*    <Switch>*/}
            {/*        <Route path="/article" component={ArticleListComponent}></Route>*/}
            {/*        <Route path="/member/register" component={RegisterNewMemberComponent}></Route>*/}
            {/*    </Switch>*/}
            {/*</Router>*/}
        </div>
    );
}

export default App;
