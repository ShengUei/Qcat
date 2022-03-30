import React from "react";
// import logo from './logo.svg';
// import './App.css';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {BrowserRouter , Route, Switch} from 'react-router-dom'
import LogInComponent from "./components/LogInComponent";
import RegisterNewMemberComponent from "./components/RegisterNewMemberComponent";
import ArticleListComponent from "./components/ArticleListComponent";

function App() {
    return (
        // <div>
        //     <BrowserRouter>
        //         <Routes>
        //             <Route path="/" element={<LogInComponent/>}/>
        //             <Route path="/register" element={<RegisterNewMemberComponent/>}/>
        //             <Route path="/article" element={<ArticleListComponent/>}/>
        //         </Routes>
        //     </BrowserRouter>
        // </div>
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component ={LogInComponent}/>
                    <Route path="/register" component ={RegisterNewMemberComponent}/>
                    <Route path="/article" component ={ArticleListComponent}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
