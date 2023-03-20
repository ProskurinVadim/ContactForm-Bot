import React, { useState } from "react";
import { Input } from "@components/common";
import { useInput } from "hooks/useInpur";
import Form from "../Form";
import { emailValidator, passwordValidator } from "utils/validate";
import { emailError, passwordError, confirmError } from "../errorsNames";
    

const Login: React.FC = () => {

    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const { bind: emailBind, validate: emailValidate } = useInput(emailValidator,)
    const { bind: passwordBind, validate: passwordValidate } = useInput(passwordValidator,)

    const handelSetLoading = (newLoading: boolean) => loading !== newLoading && setLoading(prev => !prev);
    const handelSetError = (newError: string) => error !== newError && setError((prev) => newError);

    const handelSubmit = () => {
        handelSetLoading(true)
        if (emailValidate()) handelSetError(emailError)
        else if (passwordValidate()) handelSetError(passwordError)
        else {
            handelSetError("")
            handelSetLoading(false);
            console.log("Success")
        }
    }

    return (
        <div>
            <Form
                error={error}
                emailBind={emailBind}
                passwordBind={passwordBind}
                onSubmit={handelSubmit}
            />
        </div>
    )
}
}

export default Login