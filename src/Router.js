import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUp from "./pages/auth/SignUp";
import Dashboard from "./pages/dashboard/Dashboard";
import MyFiles from "./pages/dashboard/MyFiles";
import SharedFiles from "./pages/dashboard/SharedFiles";
import Home from "./pages/home/Home";

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/shared" element={<SharedFiles/>}/>
                    <Route path="/myfiles" element={<MyFiles/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Router;