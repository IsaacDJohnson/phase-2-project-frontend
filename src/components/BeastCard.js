import React from "react";

function BeastCard({name, type, size, src}){

    return (
        <div className="card">
            <h2>{name}</h2>
            <img className="image" src={src} alt="ERROR: Missing Image :("/>
            <li>Type: {type}</li>
            <li>Size: {size}</li>
        </div>
    );
}

export default BeastCard;