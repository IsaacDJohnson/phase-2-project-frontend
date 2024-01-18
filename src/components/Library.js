import React from "react";
import { useOutletContext } from "react-router-dom";
import BeastCard from "./BeastCard";

function Library(){

    const {data} = useOutletContext();

    return (
        <>
        <h1 className="title">Bestiary</h1>
        <h1>This is an incomplete list of all known creatures roaming the wilds</h1>
        <ul className="cards">
            {data ? data.map((item) =>
                <BeastCard
                    name={item.name}
                    type={item.type}
                    size={item.size}
                    src={item.image}
                    key={item.id}
                />
            ) : []}
        </ul>
        </>
    );
}

export default Library;