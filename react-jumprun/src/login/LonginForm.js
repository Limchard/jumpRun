import React, {useState} from 'react';
import './login.css';


function LonginForm(props) {

    const [id,setId]=useState('');
    const [pass,setPass]=useState('');

    function onLogin(){

    }

    return (
        <div className={'login-box'}>
            <form onSubmit={'onLogin'}>
                <table className={'login-box2'}>
                    <thead>
                    <tr>
                        <th className={'login-title'} colSpan={2}>Login</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td colSpan={2}>
                            <input className={'login-id'} type={"text"} placeholder={'ID를 입력하세요'}
                                   onChange={event => {
                                   setId(event.target.value)
                                   }}/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <input className={'login-pw'} type={"password"} placeholder={'비밀번호를 입력하세요'}
                            onChange={event => {
                                setPass(event.target.value)
                            }}/>
                        </td>
                    </tr>
                    <tr>
                        <td align={"center"}>
                            <button type={"submit"} className={'login-btn'}>Login</button>
                        </td>
                        <td align={"center"}>
                            <button type={"button"} className={'login-btn'}>Sign up</button>
                        </td>
                    </tr>
                    </tbody>
                </table>

            </form>
        </div>
    );
}

export default LonginForm;