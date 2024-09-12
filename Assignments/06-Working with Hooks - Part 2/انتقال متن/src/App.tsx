import {useRef, useState} from "react";

function App() {
    const [inputValue, setInputValue] = useState("");
    const disabledInputRef = useRef<HTMLInputElement>(null);


    function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value);
    }

    function onClickMove() {
        if (disabledInputRef.current) {
            disabledInputRef.current.value = inputValue;
            setInputValue("")
        }
    }

    return (
        <>
            <div>
                <input id="enabled-input" value={inputValue} onChange={onChangeInput}/>
                <button id="move-button" onClick={onClickMove}>Move</button>
            </div>

            <hr/>

            <div>
                <input id="disabled-input" disabled ref={disabledInputRef}/>
            </div>
        </>
    );
}

export default App;
