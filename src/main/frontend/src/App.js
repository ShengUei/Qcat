import React from "react";
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ArticleListComponent from "./components/ArticleListComponent";

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/article" component={ArticleListComponent}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
