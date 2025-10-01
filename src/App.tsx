import './App.css'

import {Route, Routes} from "react-router-dom";
import CharacterList from "./CharacterList.tsx";
import Footer from "./Footer.tsx";
import Navbar from "./Navbar.tsx";
import CharacterDetail from "./CharacterDetail.tsx";
import CharacterForm from "./CharacterForm.tsx";
import type {Character} from "./CharacterType.ts";
import CharacterPage from "./CharacterPage.tsx";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

    function onSubmit(character: Character) {
        characters.push(character);
    }

    const [characters, setCharacters] = useState<Character[]>([]);
    const url = "https://rickandmortyapi.com/api/character";

    function getCharacters() {
        axios.get(url)
            .then(response =>
                setCharacters(response.data.results))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getCharacters();
    }, [])

    return (
        <>
            <Navbar />
            <Routes>
                <Route path={"/characters"} element={<CharacterList  data={characters} />} />
                <Route path={"/characters/:id"} element={<CharacterDetail  data={characters} />} />
                <Route path={"/welcome"} element={<Footer />} />
                <Route path={"/"} element={<CharacterList  data={characters} />} />
                <Route path={"/form"} element={<CharacterForm onSubmit={onSubmit} />} />
                <Route path={"/char"} element={<CharacterPage />} />
            </Routes>
        </>
    )
}

export default App
