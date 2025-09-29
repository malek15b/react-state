import {useState} from "react";

type TitleProps = {
    title: string,
    description: string
}
export default function Title(props: Readonly<TitleProps>) {

    const [counter, setCounter] = useState<number>(0);

    return (
        <>
            <h2>{props.title}</h2>
            <h4>{props.description}</h4>
            <h4>{counter}</h4>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>Click me!
            </button>
        </>
    )
}