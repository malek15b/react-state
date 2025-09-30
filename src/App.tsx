import './App.css'

import {Route, Routes} from "react-router-dom";
import CharacterList from "./CharacterList.tsx";
import Footer from "./Footer.tsx";
import Navbar from "./Navbar.tsx";
import {response} from "./rickandmorty.ts";
import CharacterDetail from "./CharacterDetail.tsx";
import CharacterForm from "./CharacterForm.tsx";
import type {Character} from "./CharacterType.ts";

function App() {

    const characters: Character[] = response.results ;
    function onSubmit(character: Character) {
        characters.push(character);
    }

    return (
        <>
            <Navbar />
            <Routes>
                <Route path={"/characters"} element={<CharacterList  data={characters} />} />
                <Route path={"/characters/:id"} element={<CharacterDetail  data={characters} />} />
                <Route path={"/welcome"} element={<Footer />} />
                <Route path={"/"} element={<CharacterList  data={characters} />} />
                <Route path={"/form"} element={<CharacterForm onSubmit={onSubmit} />} />
            </Routes>
        </>
    )
}

export default App
