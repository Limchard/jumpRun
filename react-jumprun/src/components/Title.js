import React from 'react';
import { NavLink } from 'react-router-dom';

function Title(props) {

    function goLoginForm(){
        window.location='/login/';
    }

    return (
        <div className={'title-box'}>
            <span className={'title'}>
                <NavLink to='/'>JUMPRUN</NavLink>
            </span>
            <span className={'login'}>
                <button type={"button"} className={'title-login'} onClick={goLoginForm}>Login</button>
            </span>

        </div>
    );
}

export default Title;