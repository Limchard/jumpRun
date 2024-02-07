import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import('./SignUp.css');

function SignUpForm(props) {

    const navi=useNavigate();
    const [data,setData]=useState({
        id:'',
        pw:'',
        name:'',
        hp:'',
        email:'',
        addr:'',
        photo:'',
        rating:'',
        emailOk:false
    });



    return (
        <div className={'signup-box'}>
            <form onSubmit={"login"}>
                <div className={'signup-title'}>회원가입</div>
                <hr/>
                <div className={'signup-id'}>
                    <div className={'signup-name'}>아이디</div>
                    <input type={"text"} className={'signup-input'} placeholder={'아이디'}/>
                </div>
                <div className={'pw-box'}>
                    <div className={'signup-name'}>비밀번호</div>
                    <input type={"password"} placeholder={'비밀번호'}/>
                </div>
                <div>
                    <div className={'signup-name'}>이름</div>
                    <input type={"text"} placeholder={'이름'}/>
                </div>
                <div>
                    <div className={'signup-name'}>연락처</div>
                    <input type={"text"} placeholder={'연락처'}/>
                </div>
                <div>
                    <div className={'signup-name'}>이메일</div>
                    <input type={"text"} placeholder={'이메일'}/>
                </div>
                <div>
                    <div className={'signup-name'}>주소</div>
                    <input type={"text"} placeholder={'주소'}/>
                </div>
                <div>
                    <div className={'signup-name'}>생년월일</div>
                    <input type={"text"} placeholder={'생년월일'}/>
                </div>
                <div>
                    <div className={'signup-name'}>성별</div>
                    <input type={"text"} placeholder={'성별'}/>
                </div>
                <div>
                    <div className={'signup-name'}>사진</div>
                    <input type={"text"} placeholder={'사진'}/>
                </div>
            </form>
        </div>
    );
}

export default SignUpForm;
