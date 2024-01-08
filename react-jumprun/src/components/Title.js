import React from 'react';
import { NavLink } from 'react-router-dom';

function Title(props) {
    return (
        <div className='title'>
            <NavLink to='/'>JUMPRUN</NavLink>
        </div>
    );
}

export default Title;