import React from 'react'
import './LoginForm.css';
import { FaUser, FaLock, FaGoogle } from "react-icons/fa";
import { SiKakao, SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";


const LoginForm = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>로그인 연동 화면</h1>
                <div className="input-box">
                    <input type="text" placeholder='아이디' required />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='비밀번호' required />
                    <FaLock className='icon' />
                </div>
                <div className="kakao-login">
                    <SiKakao className='icon' />
                    <RiKakaoTalkFill className='icon' />
                    <SiNaver className='naver-icon' />
                    <FaGoogle className='google-icon'/>
                </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />기억하기</label>
                        <a href="#">비밀번호찾기</a>
                    </div>

                    <button type="submit">Login</button>

                    <div className="register-link">
                        <p>계정이 없으십니까? <a href="#">회원가입</a></p>
                    </div>
            </form>
        </div>
    )
}

export default LoginForm;