import React from "react";

interface ITogler {
    labels: string[],
    active: string,
    setActive: (newStr: any) => void
}

const Toggler: React.FC<ITogler> = ({ labels, active, setActive }) => {

    return (
        <ul className="togler">
            {labels.map((elem, i) =>
                <li
                    className={`togler-item ${active === elem ? "active" : ""}`}
                    key={`togler-item-${i}`}
                    onClick={() => setActive(elem)}
                >
                    {elem}
                </li>
            )}
        </ul>
    )
}

export default Toggler