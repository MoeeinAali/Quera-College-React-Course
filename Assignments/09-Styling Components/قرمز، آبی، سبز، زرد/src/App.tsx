import {useState} from "react";

function App() {
    const [color, setColor] = useState("");

    function handleClickButton(button: HTMLButtonElement) {
        setColor(button.id.split("-")[0]);
    }

    return (
        <>
            <div
                onClick={(e) => {
                    const target = e.target as HTMLElement;
                    if (target instanceof HTMLButtonElement) {
                        handleClickButton(target);
                    }
                }}
                style={{marginBottom: "8px"}}
            >
                <button id="red-button">RED</button>
                <button id="green-button">GREEN</button>
                <button id="blue-button">BLUE</button>
                <button id="yellow-button">YELLOW</button>
            </div>
            <p id="text" style={{color: color}}>
                This is a colorful text!
            </p>
        </>
    );
}

export default App;
