import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu(props) {
    return (
        <div className='menu-box'>
            <ul className='menu'>
            <li><NavLink to='/exercise/management'>운동관리</NavLink></li>
            <li><NavLink to='/exercise/sns'>오운완SNS</NavLink></li>
            <li><NavLink to='/exercise/challenge'>CHALLENGE</NavLink></li>
            <li><NavLink to='/exercise/crew'>CREW모집</NavLink></li>
            <li><NavLink to='/exercise/center'>운동센터</NavLink></li>
        </ul>
        </div>
    );
}

export default Menu;