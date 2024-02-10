import React from 'react';
import Title from "./components/Title";
import Menu from "./components/Menu";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import {LoginForm} from "./login";
import SignUpForm from "./member/SignUpForm";

function RouteMain(props) {
    return (
        <div>
            <div className={'title'}><Title/></div>
            <div className={'menu'}><Menu/></div>
            <div className={'main'}>
                <Routes>
                    <Route path={'/'} element={<Main/>}/>

                    <Route path={'/login'} element={<LoginForm/>}/>
                    <Route path={'/member/signup'} element={<SignUpForm/>}/>
                </Routes>
            </div>
            <div className={'footer'}><Footer/></div>


        </div>
    );
}

export default RouteMain;
