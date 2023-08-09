import React, { useState } from 'react';
import { DataContext } from './DataContext';
import FirstComponent from './../usecontext/FirstComponent';

function ContextBasic() {
    const [name, setName] = useState('프로퍼티로 넘겨주기');
    const message = "Context로 넘겨주기";
    return (
        <div className='container'>
            <h3>ContextBasic, FirstComponent, SecondComponent의 코드를 확인해보세요</h3>
            <DataContext.Provider value={message}>
                <FirstComponent name={name} />
            </DataContext.Provider>
        </div>
    );
}

export default ContextBasic;