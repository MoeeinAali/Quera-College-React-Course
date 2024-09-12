import {useState} from "react";

function App() {
    const [userInput, setUserInput] = useState("");
    const [userInfo, setUserInfo] = useState({
        name: " ",
        age: 0,
    });

    function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setUserInput(e.target.value)
    }

    function onSubmit() {
        const [name, age] = userInput.split(' ')
        setUserInfo({name: name, age: Number(age)})

    }

    return (
        <>
            <input id="user-input" value={userInput} onChange={onInputChange}/>
            <button
                id="submit-button"
                onClick={onSubmit}
                disabled={!userInput.length}
            >
                Submit
            </button>
            <p>
                My name is {userInfo.name} and I'm {userInfo.age} years old.
            </p>
        </>
    );
}

export default App;
