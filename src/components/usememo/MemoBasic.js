import { useMemo, useState } from "react";

const complexCompute = (num) => {
    console.log('complexCompute');
    return num * num;
}

function MemoBasic1() {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);
    
    const countResult1 = complexCompute(countB); // countA가 변경되어도 실행됨

    const countResult2 = useMemo(() => complexCompute(countB), [countB]); // 의존성 배열에 있는 값이 변경될 때만 실행
    
    return ( 
        <div className='container'>
            <p>업데이트가 필요없는 component까지 re-Rendering되는 경우</p>
            <p>countResult1: {countResult1}</p>
            <p>countResult2: {countResult2}</p>
            <p>countA: {countA}</p>
            <p>countB: {countB}</p>
            <button onClick={() => setCountA(countA + 1)}>countA 증가</button>
            <button onClick={() => setCountB(countB + 1)}>countB 증가</button>
        </div>
    );
}

export default MemoBasic1;