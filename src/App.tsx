import './App.css'
import {response} from "./rickandmorty.ts";
import CharacterCard from "./CharacterCard.tsx";
import DataForm from "./DataForm.tsx";
import {useState} from "react";

function App() {

    const [search, setSearch] = useState<string>("");
    const [amount, setAmount] = useState<number>(0)
    const [showAll, setShowAll] = useState<boolean>(true)

    return (
        <>
            <DataForm setName={setSearch}/>

            <button className="mb-6" onClick={() => {
                setShowAll(false)
                setAmount(amount + 5)
            }}>5 Charaktere anzeigen
            </button>

            <button className="mb-6" onClick={() => {
                setShowAll(true)
            }}>Alle anzeigen
            </button>

            <div className="d-flex">
                {
                    (() => {
                        let filtered = response.results
                            .filter((c) => search.length === 0 ||
                                c.name.toLowerCase().includes(search.toLowerCase()));
                        if (filtered.length === 0) {
                            return <p className="search-not-found mt-2 text-sm text-red-600 dark:text-red-500">
                                <span className="font-medium">Der Name existiert nicht.</span></p>
                        }
                        if(amount >= filtered.length) {
                            setAmount(0)
                        }
                        if(!showAll) {
                            filtered = filtered.slice(amount, amount + 5)
                        }
                        return filtered
                            .map((c) =>
                                <CharacterCard key={c.id} character={c}/>
                            );
                    })()
                }
            </div>
        </>
    )
}

export default App
