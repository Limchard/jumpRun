import React from 'react';
import('./SignUp.css');

function SignUpForm(props) {
    return (
        <div className={'signup-box'}>
            <h2>회원가입</h2>
            <div className={'signup-id'}>
                <input type={"text"} placeholder={'아이디'}/>
            </div>
            <div className={'pw-box'}>
                <input type={"password"} placeholder={'비밀번호'}/>
            </div>
            <div>
                <input type={"text"} placeholder={'이름'}/>
            </div>
            <div>
                <input type={"text"} placeholder={'연락처'}/>
            </div>
            <div>
                <input type={"text"} placeholder={'이메일'}/>
            </div>
            <div>
                <input type={"text"} placeholder={'주소'}/>
            </div>
            <div>
                <input type={"text"} placeholder={'사진'}/>
            </div>

        </div>
    );
}

export default SignUpForm;
