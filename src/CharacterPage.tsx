import {useState} from "react";
import axios from "axios";
import type {Character} from "./CharacterType.ts";

export default function CharacterPage() {

    const init = {
        id: 0,
        name: "",
        image: ""
    }

    const [character, setCharacter] = useState<Character>(init);
    const url = "https://rickandmortyapi.com/api/character/2";

    function getRick() {
        axios.get(url)
            .then(response =>
                setCharacter(response.data))
            .catch((error) => console.log(error))
    }

    return (
        <>
            <button onClick={getRick}>click me!</button>
            {
                character.id !== 0 &&
                <div className="card">
                    <h2>{character.name}</h2>
                    <img src={character.image} alt="rick"></img>
                </div>
            }
        </>
    )
}