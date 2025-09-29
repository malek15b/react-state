export default function Footer(){
    const year: number = new Date().getFullYear();
    return(
        <>
            Copyright © {year} Quasi Architect
        </>
    )
}