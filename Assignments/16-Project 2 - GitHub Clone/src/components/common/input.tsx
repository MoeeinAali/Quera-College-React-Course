import React from 'react';

import IInputProps from '../../core/interfaces/props/Iinput.prop';



const Input: React.FC<IInputProps> = ({ type, className, placeHolder, onChange, labelClassName, value, register }) => {
    return (
        <input
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={value}
            type={type}
            id={type}
            placeholder={placeHolder}
            {...register}
        />
    )
}

export default Input;
