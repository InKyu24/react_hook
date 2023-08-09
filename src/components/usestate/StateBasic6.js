import { useState } from 'react';

function StateBasic6() {
    const [checkedVal, setCheckedVal] = useState(false);

    return (
        <div>
            <p>ID 저장 유무 : {checkedVal ? '저장함' : '저장 안함'}</p>
            <input type="checkbox" id="saveID" name="saveID" defaultChecked={checkedVal} onClick={()=>setCheckedVal(!checkedVal)}/>
            <label htmlFor="saveID">ID 저장</label>
        </div>
    );
}

export default StateBasic6;