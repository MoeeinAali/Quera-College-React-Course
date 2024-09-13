import {useRef, useState} from "react";

function App() {
    const [text, setText] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
        setText(e.target.value);
    }

    function onValidate() {
        if (inputRef.current) {
            if (text) {
                inputRef.current.style.borderColor = "green";
            } else {
                inputRef.current.style.borderColor = "red";
            }
        }
    }

    return (
        <>
            <input id="text-input" value={text} ref={inputRef} onChange={onChangeInput}/>
            <button id="validate-button" onClick={onValidate}>Validate</button>
        </>
    );
}

export default App;
