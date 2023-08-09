import React from 'react';
import { useNavigate } from 'react-router-dom';

function Page() {
    const navigation = useNavigate();
    const homeMove = () => navigation('/');
    const loginMove = () => navigation('/login');
    const joinMove = () => navigation('/join');
    const useStateMove = () => navigation('/useState');
    const useEffectMove = () => navigation('/useEffect');
    const useContextMove = () => navigation('/useContext');
    const useMemoMove = () => navigation('/useMemo');

    return (
        <div className='container'>
            <button onClick={homeMove}>Home</button>
            <button onClick={loginMove}>로그인</button>
            <button onClick={joinMove}>회원가입</button>
            <button onClick={useStateMove}>useState</button>
            <button onClick={useEffectMove}>useEffect</button>
            <button onClick={useContextMove}>useContext</button>
            <button onClick={useMemoMove}>useMemo</button>
        </div>
    );
}

export default Page;