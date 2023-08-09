import { useState } from 'react';

function StateBasic4() {
    const [selectVal, setSelectVal] = useState("HTML");

    return (
        <div>
            <p>현재 선택된 항목 : <b>{selectVal}</b></p>
            <select value={selectVal} onChange={(e)=>setSelectVal(e.target.value)}>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="React">React</option>
            </select>
            <hr />
        </div>
    );
}

export default StateBasic4;