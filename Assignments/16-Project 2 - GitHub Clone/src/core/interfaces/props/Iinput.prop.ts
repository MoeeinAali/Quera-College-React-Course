interface IInputProps {
    label?: string,
    type: string,
    className?: string,
    labelClassName?: string,
    value?: string,
    placeHolder: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    register?: any,  
}

export default IInputProps