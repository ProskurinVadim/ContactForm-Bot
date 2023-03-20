import React from "react";
import FormItem from "./FormItem";
import { Input } from "@components/common";
import { IInput } from "types";


interface IForm {
    error: string,
    onSubmit: () => void,
    errorText?: string,
    emailBind: IInput,
    passwordBind: IInput,
    confirmBind?: IInput

}

const Form: React.FC<IForm> = ({ onSubmit, emailBind, passwordBind, confirmBind, error }) => {

    return (
        <div>
            <h2>{error}</h2>
            <FormItem text="Email :" inputBind={emailBind} />
            <FormItem text="Password :" inputBind={passwordBind} />
            {confirmBind && <FormItem text="Confirm password: " inputBind={confirmBind} />}
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}

export default Form