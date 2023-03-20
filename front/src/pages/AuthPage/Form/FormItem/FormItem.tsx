import React from "react";
import { Input } from "components/common";
import { IInput } from "types";

interface IItem {
    text: string
    inputBind: IInput,
}

const FormItem: React.FC<IItem> = ({ text, inputBind }) => {
    return (
        <div>
            <p>{text}</p>
            <Input {...inputBind} />
        </div>
    )
}

export default FormItem