import {useNavigate} from "react-router-dom";
import type {Character} from "./CharacterType.ts";

type CharacterProps = {
    character: Character
}

export default function CharacterCard(props: CharacterProps) {

    const nav = useNavigate();

    return (
        <>
            <div className="card" onClick={() => nav("/characters/" + props.character.id)}>
                <h2>{props.character.name}</h2>
                <img src={props.character.image} alt="rick"></img>
            </div>
        </>
    )
}