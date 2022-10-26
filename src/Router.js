import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/auth/LogIn";
import SignUp from "./pages/auth/SignUp";
import Dashboard from "./pages/dashboard/Dashboard";
import MyFiles from "./pages/dashboard/MyFiles";
import SharedFiles from "./pages/dashboard/SharedFiles";
import Home from "./pages/home/Home";
import Newsletter from "./pages/newsletter/Newsletter";

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Newsletter/>}/>
                    <Route path="/new-home" element={<Home/>}/>
                    <Route path="/new-signup" element={<SignUp/>}/>
                    <Route path="/new-login" element={<Login/>}/>
                    <Route path="/new-dashboard" element={<Dashboard/>}/>
                    <Route path="/new-shared" element={<SharedFiles/>}/>
                    <Route path="/new-myfiles" element={<MyFiles/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Router;