import {useEffect, useState} from "react";

export default function useValidation(initialValue: string) {
    const [value, setValue] = useState<string>(initialValue)
    const [isValid, setIsValid] = useState<boolean>(false)

    useEffect(() => {
        const numbered_value = Number(value);
        if (numbered_value > 1900 && numbered_value < 2024) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
    }, [value, setValue]);

    return {
        value,
        setValue,
        isValid
    }
}


