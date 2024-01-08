import React from 'react';
import Title from "./components/Title";
import Menu from "./components/Menu";
import Main from "./components/Main";
import Footer from "./components/Footer";

function RouteMain(props) {
    return (
        <div>
            <div className={'title'}><Title/></div>
            <div className={'menu'}><Menu/></div>
            <div className={'main'}><Main/></div>
            <div className={'footer'}><Footer/></div>

        </div>
    );
}

export default RouteMain;
