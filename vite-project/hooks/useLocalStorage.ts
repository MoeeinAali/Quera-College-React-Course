import {useEffect, useState} from "react";

export default function useLocalStorage(key: string, initialValue: string) {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? item : initialValue;
    });

    useEffect(() => {
        window.localStorage.setItem(key, storedValue);
    }, [key, storedValue]);

    return {storedValue, setStoredValue};
}