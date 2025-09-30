import {type FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import type {Character} from "./CharacterType.ts";

type CharacterFormProps = {
    onSubmit: (character: Character) => void
}

export default function CharacterForm(props: CharacterFormProps) {

    const [name, setName] = useState<string>("")
    const [image, setImage] = useState<string>("")

    const nav = useNavigate();

    function handelSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const character: Character = {id: new Date().getTime(), name: name, image: image};
        console.log(character);
        props.onSubmit(character);
        setImage("")
        setName("")
        nav("/")
    }

    return (
        <>
            <form onSubmit={handelSubmit}>
                <div className="mb-6">
                    <label htmlFor="default-input" className="block mb-2 text-sm font-medium
                text-gray-900">
                        Name: </label>
                    <input
                        onChange={(e) =>
                            setName(e.target.value)}
                        type="text" id="default-input"
                        placeholder="Name Eingeben"
                        value={name}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                </div>
                <div className="mb-6">
                    <label htmlFor="default-input" className="block mb-2 text-sm font-medium
                text-gray-900">
                        Image: </label>
                    <input
                        onChange={(e) =>
                            setImage(e.target.value)}
                        type="text" id="default-input"
                        placeholder="Bild URL Eingeben"
                        value={image}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                </div>

                <button type={"submit"}>Absenden</button>
            </form>
        </>
    )
}