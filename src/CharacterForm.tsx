import {type ChangeEvent, type FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import type {Character} from "./CharacterType.ts";

type CharacterFormProps = {
    onSubmit: (character: Character) => void
}

export default function CharacterForm(props: CharacterFormProps) {

    const init = {
        id: 0,
        name: "",
        image: ""
    }

    const [character, setCharacter] = useState<Character>(init)

    function handelChange(e: ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target;
        setCharacter({
            ...character,
            [name]: value
        })
    }

    const nav = useNavigate();

    function handelSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setCharacter({
            ...character,
            id: new Date().getTime() //Test
        })
        props.onSubmit(character);
        setCharacter(init)
        nav("/")
    }

    return (
        <>
            <div className="container w-50">
            <form onSubmit={handelSubmit}>
                <div className="mb-6">
                    <label htmlFor="default-input" className="block mb-2 text-sm font-medium
                text-gray-900">
                        Name: </label>
                    <input
                        onChange={handelChange}
                        type="text" id="default-input"
                        placeholder="Name Eingeben"
                        name={"name"}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                </div>
                <div className="mb-6">
                    <label htmlFor="default-input" className="block mb-2 text-sm font-medium
                text-gray-900">
                        Image: </label>
                    <input
                        onChange={handelChange}
                        type="text" id="default-input"
                        placeholder="Bild URL Eingeben"
                        name={"image"}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                </div>

                <button type={"submit"}>Absenden</button>
            </form>
            </div>
        </>
    )
}