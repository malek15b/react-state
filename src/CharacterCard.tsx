type Character = {
    name: string,
    image: string
}

type CharacterProps = {
    character: Character
}

export default function CharacterCard(props: CharacterProps) {

    return (
        <>
            <div className="card">
                <h2>{props.character.name}</h2>
                <img src={props.character.image} alt="rick"></img>
            </div>
        </>
    )
}