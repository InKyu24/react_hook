import { useEffect, useState } from "react";

function EffectBasic1() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(100);
    const counter = () => {
        setCount(count + 1);
    }
    const counter2 = () => {
        setCount2(count2 - 1);
    }

    useEffect(() => {
        console.warn('1. 렌더링될 때마다 실행됩니다.');
    });

    useEffect(() => {
        console.error('2. 최초로 렌더링될 때만 실행됩니다.');
    }, []);

    useEffect(() => {
        console.log('3. 최초로 렌더링될 때와 count가 변경될 때 실행됩니다.');
    }, [count]);
    
    useEffect(() => {
        console.log('4. 최초로 렌더링될 때와 count가 변경될 때, count2가 변경될 때 실행됩니다');
    }, [count, count2]);

    return (
        <div className='container'>
            <h3>console 창을 확인해주세요.</h3>
            <p>카운터: {count}</p>
            <button type="button" onClick={counter}>counter</button>

            <p>카운터2: {count2}</p>
            <button type="button" onClick={counter2}>counter2</button>
        </div>
    );
}

export default EffectBasic1;