import './App.css'

import {Route, Routes} from "react-router-dom";
import CharacterList from "./CharacterList.tsx";
import Footer from "./Footer.tsx";
import Navbar from "./Navbar.tsx";
import {response} from "./rickandmorty.ts";
import CharacterDetail from "./CharacterDetail.tsx";

function App() {

    return (
        <>
            <Navbar />
            <Routes>
                <Route path={"/characters"} element={<CharacterList  data={response.results} />} />
                <Route path={"/characters/:id"} element={<CharacterDetail  data={response.results} />} />
                <Route path={"/welcome"} element={<Footer />} />
                <Route path={"/"} element={<CharacterList  data={response.results} />} />
            </Routes>
        </>
    )
}

export default App
