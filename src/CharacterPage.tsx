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

    function postProject() {
        axios.post("http://localhost:8080/api/project", {
            "name" : "test",
            "time" : "2025-09-30",
            "description": "Project 123",
            "created": "2025-09-22"
        })
            .then(response =>
                console.log(response.data))
            .catch((error) => console.log(error))
    }

    return (
        <>
            <button onClick={getRick}>click me!</button>
            <button onClick={postProject}>Post</button>
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