import { useState } from 'react';

function StateBasic3() {
    const [inputText, setInputText] = useState("");
    const [text, setText] = useState("react");

    function handleChange(e) {
        setInputText(e.target.value);
    }

    function handleClick() {
        setText(inputText);
        setInputText("");
    }
    return (
        <div>
            <h1>I love {text}</h1>
            <input type="text" value={inputText} placeholder="change me" onChange={handleChange} />
            <input type="button" value="입력" onClick={() => handleClick()} />
            <hr />
        </div>
    );
}

export default StateBasic3;