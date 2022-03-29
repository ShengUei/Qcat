import React from "react";
// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LogInComponent from "./components/LogInComponent";
import RegisterNewMemberComponent from "./components/RegisterNewMemberComponent";
import ArticleListComponent from "./components/ArticleListComponent";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LogInComponent/>}/>
                    <Route path="/member/register" element={<RegisterNewMemberComponent/>}/>
                    <Route path="/article" element={<ArticleListComponent/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
