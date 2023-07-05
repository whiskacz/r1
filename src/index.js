import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";



function FirstElement(){
    const [imie, setImie] = useState("Żyrafa")
    const [data, setData] = useState("01-01-1985")
    
    const handleImieChange = (e) => {
        setImie(e.target.value)
    }
    const handleDataChange = (e) => {
        setData(e.target.value)
    }

    return(
    <>
    <div>Twoję imię to {!imie ? ">>> tutaj wstaw imię<<<" : imie}</div>
    <div>Twoja data urodzenia to {!data ? ">>> tutaj się pojawi Twoja data <<<" : data}</div>
    <input type="text" onChange={handleImieChange} value={imie}/>
    <input type="date" onChange={handleDataChange}/>
    </>
)}


const el = document.getElementById("root")
const root = ReactDOM.createRoot(el)
root.render(<FirstElement />)