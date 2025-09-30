import {useNavigate} from "react-router-dom";

export default function Footer(){
    const year: number = new Date().getFullYear();

    const nav = useNavigate();

    function doAndNav() {
        nav("/characters")
    }
    return(
        <>
            <p className="mb-6">Copyright © {year} Quasi Architect</p>
            <button onClick={doAndNav}>Navigate</button>

        </>
    )
}