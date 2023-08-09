import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
    const [formData, setFormData] = useState({
        userID: '',
        password: '',
        rememberMe: ''
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData({
            ...formData,
            [name]: newValue
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newErrors = {};
        if (!formData.userID) {
            newErrors.userID = '사용자 이름을 입력하세요.';
        }
        if (!formData.password) {
            newErrors.password = '비밀번호를 입력하세요.';
        }

        if (Object.keys(newErrors).length === 0) {
            // 로그인 진행
            console.log(formData);
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="login-form container">
            <h2>로그인</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="userID">사용자 이름</label>
                    <input
                        type="text"
                        id="userID"
                        name="userID"
                        value={formData.userID}
                        onChange={handleInputChange}
                    />
                    {errors.userID && <span className="error">{errors.userID}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">비밀번호</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>
                <div className="form-group">
                    <label>
                        <input
                            type="checkbox"
                            name='rememberMe'
                            checked={formData.rememberMe}
                            onChange={handleInputChange}
                        />
                        ID 저장
                    </label>
                </div>
                <button type="submit">로그인</button>
            </form>
        </div>
    );
};

export default LoginForm;