import { useState } from 'react';

function StateBasic1() {
    const [clickState, setClickState] = useState('클릭');
    const [clickNum, setClickNum] = useState(0);
    const bthClick1 = () => {
        setClickNum(clickNum + 1);
        setClickState('클릭됨');
    }

    const [click, setClick] = useState({ "state": '클릭', "num": 0 });
    const bthClick2 = () => {
        setClick({ "state": '클릭됨', "num": click.num + 1 });
    }
    return (
        <div>
            <p>두 개의 state를 이용</p>
            <button onClick={bthClick1}>{clickNum ? clickNum + '번 ' :''}{clickState}</button>
            
            <br/>
            
            <p>하나의 state를 이용</p>
            <button onClick={bthClick2}>{click.num ? click.num + '번 ' :''}{click.state}</button>
            <hr/>
        </div>
    );
}

export default StateBasic1;