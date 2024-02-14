import React, {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";

import('./SignUp.css');

function SignUpForm(props) {

    const navi = useNavigate();
    const [data, setData] = useState({
        id: '',
        pw: '',
        name: '',
        hp: '',
        email: '',
        addr: '',
        photo: '',
        rating: '',
        emailOk: false
    });

    const hp2Ref = useRef(null);
    // useRef를 상굥하여 세 번째 입력 필드에 대한 참조를 생성합니다.
    const hp3Ref = useRef(null);
    // 이게 JSP 에서 selector 지정하기 위한 작업 같은 느낌인듯

    const [hp1, setHp1] = useState('010');
    const [hp2, setHp2] = useState('0000');
    const [hp3, setHp3] = useState('0000');

    const changeHp1 = (e) => {
        setHp1(e.target.value);
        hp2Ref.current.focus();
    }
    const changeHp2 = (e) => {
        setHp2(e.target.value);
        if (e.target.value.length === 4) { // 입력 길이가 maxLength와 같을 때 세 번째 입력 필드로 포커스 이동

            hp3Ref.current.focus();
        }

    }
    const changeHp3 = (e) => {
        setHp3(e.target.value);
    }

    const onEmailChange = (e) => {
        const {value} = e.target;
        console.log(value);
    }

    return (
        <div className={'signup-box'}>
            <form onSubmit={"login"}>
                <div className={'signup-title'}>회원가입</div>
                <hr/>
                <div className={'signup-article'}>
                    <div className={'signup-name'}>아이디</div>
                    <input type={"text"} className={'signup-input'} placeholder={'아이디'}/>
                </div>
                <div className={'signup-article'}>
                    <div className={'signup-name'}>비밀번호</div>
                    <input type={"password"} placeholder={'비밀번호'}/>
                </div>
                <div className={'signup-article'}>
                    <div className={'signup-name'}>이름</div>
                    <input type={"text"} placeholder={'이름'}/>
                </div>
                <div className={'signup-article'}>
                    <div className={'signup-name'}>연락처</div>
                    <div className={'hp-box'}>
                        <select className={'hp-select'} onChange={changeHp1}>
                            <option value={'010'}>010</option>
                            <option value={'011'}>011</option>
                            <option value={'016'}>016</option>
                            <option value={'017'}>017</option>
                            <option value={'018'}>018</option>
                        </select>
                        <span className={'hp-hyphen'}>-</span>
                        <input type={"text"} className={'hp-input'} placeholder={'0000'}
                               onChange={changeHp2} maxLength={4} ref={hp2Ref}/>
                        <span className={'hp-hyphen'}>-</span>
                        <input type={"text"} className={'hp-input'} placeholder={'0000'}
                               onChange={changeHp3} maxLength={4} ref={hp3Ref}/>
                        <button className={'hp-certification'}/>
                    </div>
                </div>
                <div className={'signup-article'}>
                    <div className={'signup-name'}>이메일</div>
                    <input type={"text"} placeholder={'이메일'} className={'email-input'}/>
                    <span className={'email-at'}>@</span>
                    <input type={"text"} placeholder={'주소'} className={'email-address'}/>
                    <select className={'email-select'} onChange={onEmailChange}>
                        <option value={'-'}>직접입력</option>
                        <option value={'google.com'}>구글</option>
                        <option value={'naver.com'}>네이버</option>
                        <option value={'nate.com'}>네이트</option>
                        <option value={'daum.net'}>다음</option>
                    </select>
                </div>
                <div className={'signup-article'}>
                    <div className={'signup-name'}>주소</div>
                    <input type={"text"} placeholder={'주소'}/>
                </div>
                <div className={'signup-article'}>
                    <div className={'signup-name'}>생년월일</div>
                    <input type={"text"} placeholder={'생년월일'}/>
                </div>
                <div className={'signup-article'}>
                    <div className={'signup-name'}>성별</div>
                    <input type={"text"} placeholder={'성별'}/>
                </div>
                <div className={'signup-article'}>
                    <div className={'signup-name'}>사진</div>
                    <input type={"text"} placeholder={'사진'}/>
                </div>
            </form>
        </div>
    );
}

export default SignUpForm;
