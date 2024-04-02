import React from 'react'
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import kakaologo from '../Assets/kakaologo2.png';
import emaillogo from '../Assets/emaillogo.png'; /* 이메일 */
import facebooklogo from '../Assets/facebooklogo2.png';
import googlelogo from '../Assets/googlelogo.png';
import instargramlogo from '../Assets/instargramlogo2.png';
import naverlogo from '../Assets/naverlogo.png';
import twiterlogo from '../Assets/twiterlogo3.png';


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
                <div className="oauth-login">
                    <a href="https://kauth.kakao.com/oauth/authorize" target="_blank" rel="noopener noreferrer">
                        <img src={kakaologo} alt="Kakao Login" className='icon' />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src={twiterlogo} alt="Twitter Login" className='icon' />
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <img src={facebooklogo} alt="facebook Login" className='icon' />
                    </a>
                </div>
                <div className="oauth-login">
                    <a href="https://www.google.co.kr/" target="_blank" rel="noopener noreferrer">
                        <img src={googlelogo} alt="google Login" className='icon' />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <img src={instargramlogo} alt="instargram Login" className='icon' />
                    </a>
                    <a href="https://www.naver.com/" target="_blank" rel="noopener noreferrer">
                        <img src={naverlogo} alt="naver Login" className='icon' />
                    </a>
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