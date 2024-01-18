import React, { useState } from "react";
import { useOutletContext, useNavigate} from "react-router-dom";

function SubmissionForm(){

    const [name, setName] = useState("name...")
    const [type, setType] = useState("type...")
    const [size, setSize] = useState("size...")
    const {data, setData} = useOutletContext();

    const navigate = useNavigate()

    function handleChange(e){
        if(e.target.id === "name"){
            setName(e.target.value)
        } 
        else if(e.target.id === "type"){
            setType(e.target.value)
        } else if(e.target.id === "size"){
            setSize(e.target.value)
        }
    }
    
    function addEntry(entry){
        const newArray = [...data, entry]
        setData(newArray)
        navigate("/library")
    }

    function submit(e) {
        e.preventDefault()
        const entryData = {
            name: name,
            type: type,
            size: size,
        } 

        fetch("http://localhost:4000/data", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(entryData)
        })
        .then((r) => r.json())
        .then((newEntry) => addEntry(newEntry))
    }

    return (
        <>
            <form className="form" onSubmit={submit}>
                <h1>Enter your submission here</h1>
                <h2>Name</h2>
                <input id="name" type="text" value={name} onChange={handleChange}></input>
                <h2>Type</h2>
                <input id="type" type="text" value={type} onChange={handleChange}></input>
                <h2>Size</h2>
                <input id="size" type="text" value={size} onChange={handleChange}></input><br/>
                <button className="button">Submit</button>
            </form>
        </>
    );
}

export default SubmissionForm;