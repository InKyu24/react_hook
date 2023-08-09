import { useState } from 'react';

function StateBasic5() {
    const [identifyNum, setIdentifyNum] = useState('');
    const [radioVal, setRadioVal] = useState("");

    const radioChange = (e) => {
        setRadioVal(e.target.value);
    }

    const identifyNumChange = (e) => {
        // 자동으로 '-'를 넣어주는 로직
        if(e.target.value.length === 6) {
            e.target.value += '-';
        } 

        if(e.target.value.length === 14) {
            setIdentifyNum(e.target.value);
            console.log(e.target.value.substr(7, 1) % 2);
            e.target.value.substr(7, 1) % 2 ? setRadioVal("Male") : setRadioVal("Female");
        }
    }
    return (
        <div>
            <input type="text" 
                placeholder='주민등록번호를 입력하세요'
                defaultValue={identifyNum} 
                maxLength='14'
                onChange={identifyNumChange}
            />
            <p>선택된 항목: {radioVal}</p>
            <input type="radio" name="gender" value="Male" onChange={radioChange} checked={radioVal === "Male"} />남자
            <input type="radio" name="gender" value="Female" onChange={radioChange} checked={radioVal === "Female"} />여자
            <hr />
        </div>
    );
}

export default StateBasic5;