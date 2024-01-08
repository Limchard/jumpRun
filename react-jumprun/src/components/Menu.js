import React from 'react';
import { NavLink } from 'react-router-dom';


function Menu(props) {
    return (
        <div className='menu'>
            <NavLink to='/exercise/management'>운동관리</NavLink>
            <NavLink to='/exercise/sns'>오운완SNS</NavLink>
            <NavLink to='/exercise/challenge'>CHALLENGE</NavLink>
            <NavLink to='/exercise/crew'>CREW모집</NavLink>
            <NavLink to='/exercise/center'>운동센터</NavLink>
        </div>
    );
}

export default Menu;