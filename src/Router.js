import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/home/Home";

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Router;