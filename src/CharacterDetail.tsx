import {useNavigate, useParams} from "react-router-dom";
import type {Character} from "./CharacterType.ts";

type CharacterDetailProps = {
    data: Character[]
}

export default function CharacterDetail(props: CharacterDetailProps) {
    const param = useParams();
    const characterId = parseInt(param.id);

    const nav = useNavigate();

    const [character] = props.data.filter((c) => c.id === characterId);

    return (
        <>
            <button className="mb-6" onClick={() => nav("/")}>Home</button>
            <div className="card">
                <h2>{character.name}</h2>
                <img src={character.image} alt="rick"></img>
            </div>
        </>
    )
}