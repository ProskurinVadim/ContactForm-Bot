import React from "react";
import { IInput } from "types";


const Input: React.FC<IInput> = ({ value, onChange, className, placeholder }) => {
    return (
        <input placeholder={placeholder} value={value} onChange={onChange} className={`input ${className}`} />
    )
}

export default Input