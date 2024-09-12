import {useEffect, useState} from "react";

function App() {
    const [birthYear, setBirthYear] = useState('');
    const [isValid, setIsValid] = useState(false);

    function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
        setBirthYear(e.target.value);
    }

    useEffect(() => {
        const year = Number(birthYear);
        if (year > 1900 && year < 2024) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [birthYear]);

    return (
        <>
            <div>
                <input id="birthYear-input" type="number" value={birthYear} onChange={onChangeInput}/>
            </div>

            <div>
                {!isValid && <span style={{color: 'red'}}>Invalid Birth Year!</span>}
                {isValid && <span style={{color: 'green'}}>Birth Year is OK!</span>}
            </div>
        </>
    );
}

export default App;
