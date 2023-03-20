import React, { useState } from "react";
import Condition, { If, Else } from "hoc/Conditional/Condition";
import { Toggler } from "components/common";
import Singup from "./Singup";

const AuthPage: React.FC = () => {

    const [flag, setFlag] = useState<"login" | "singin">("singin")
    const handelSetFlag = (elem: "login" | "singin") => flag !== elem && setFlag(prev => elem)

    return (
        <section>
            <div>
                <h2>Welcome to {flag}</h2>
                <Toggler labels={["login", "singin"]} active={flag} setActive={handelSetFlag}/>
                <Condition condition={flag === "login"}>
                    <If>
                        <>asd</>
                    </If>
                    <Else>
                        <Singup />
                    </Else>
                </Condition>

            </div>
        </section>
    )
}

export default AuthPage;