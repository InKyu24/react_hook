import { useState } from 'react';

function StateBasic2() {
    const [msg, setMsg] = useState("");

    const btnClick = () => {
        alert(msg);
    }
    return (
        <div>
            <input onChange={(e)=>{setMsg(e.target.value)}} />
            <button onClick={() => btnClick()}>메시지 보기</button>
            <hr />
        </div>
    );
}

export default StateBasic2;