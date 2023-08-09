import React, { useState } from 'react';
import './SignUpForm.css';

function SignUpForm() {
    const [formData, setFormData] = useState({
        userID: '',
        password: '',
        confirmPassword: '',
        userName: '',
        phoneNumber: ''
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!formData.userID) {
            newErrors.userID = '아이디를 입력해주세요.';
        }

        if (!formData.password) {
            newErrors.password = '비밀번호를 입력해주세요.';
        } else if (formData.password.length < 6) {
            newErrors.password = '비밀번호는 최소 6자 이상이어야 합니다.';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = '비밀번호가 일치하지 않습니다.';
        }

        if (!formData.userName) {
            newErrors.userName = '이름을 입력해주세요.';
        }

        if (!formData.phoneNumber) {
            newErrors.phoneNumber = '전화번호를 입력해주세요.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // 실제 회원가입이 진행됩니다.
            console.log('실제 회원가입이 진행됩니다.');
            console.log('회원가입 정보:', formData);
        } else {
            console.error('회원가입 양식에 문제가 있습니다.');
        }
    };

    return (
        <div className='container signup-form'>
            <h2>회원가입</h2>
            <form onSubmit={handleSubmit}>
                <div className='signup-form-box'>
                    <label htmlFor='userID'>아이디:</label>
                    <div className='signup-form-input'>
                        <input
                            id="userID"
                            type="text"
                            name="userID"
                            value={formData.userID}
                            onChange={handleInputChange}
                        />
                        {errors.userID && <div className="error">{errors.userID}</div>}
                    </div>
                </div>
                <div className='signup-form-box'>
                    <label>비밀번호:</label>
                    <div className='signup-form-input'>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        {errors.password && <div className="error">{errors.password}</div>}
                    </div>
                </div>
                <div className='signup-form-box'>
                    <label>비밀번호 확인:</label>
                    <div className='signup-form-input'>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                        />
                        {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
                    </div>
                </div>
                <div className='signup-form-box'>
                    <label>이름:</label>
                    <div className='signup-form-input'>
                        <input
                            type="text"
                            name="userName"
                            value={formData.userName}
                            onChange={handleInputChange}
                        />
                        {errors.userName && <div className="error">{errors.userName}</div>}
                    </div>
                </div>
                <div className='signup-form-box'>
                    <label>전화번호:</label>
                    <div className='signup-form-input'>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                        />
                        {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
                    </div>
                </div>
                <div>
                    <button type="submit">가입하기</button>
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;
