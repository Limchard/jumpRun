import React, {useState} from 'react';
import './login.css';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockIcon from '@mui/icons-material/Lock';
import SignUpForm from "../member/SignUpForm";
import {useNavigate} from "react-router-dom";

function LonginForm(props) {

    const [id,setId]=useState('');
    const [pass,setPass]=useState('');

    const navi=useNavigate();

    function onLogin(){

    }

    return (
        <div className={'login-box'}>
            <form onSubmit={'onLogin'}>
                <table className={'login-table'}>
                    <thead>
                    <tr>
                        <th className={'login-title'} colSpan={2}>Login</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td colSpan={2}>
                            <input className={'login-id'} type={"text"} placeholder={'아이디를 입력하세요'}
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
                        <td>
                            <input type={"checkbox"} className={'login-check'}/>아이디 저장하기
                        </td>
                    </tr>
                    <tr>
                        <td align={"center"}>
                            <button type={"submit"} className={'login-btn'}>Login</button>
                        </td>
                        <td align={"center"}>
                            <button type={"button"} className={'signup-btn'} onClick={()=>{
                                navi("/member/signup")
                            }}>Sign up</button>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <ul className={'find-list'}>
                    <li className={'find-list-detail'}>아이디 찾기</li>
                    <li className={'find-list-detail'}>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
                    <li className={'find-list-detail'}>비밀번호 찾기</li>
                </ul>
            </form>
        </div>
    );
}

export default LonginForm;