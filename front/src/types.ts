interface ICondition {
    condition?: boolean,
    children: React.ReactElement | string,
}

interface IInput {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    className?: string,
    placeholder?: string,
}

export type { ICondition, IInput }