import React from "react";
import { useRouteError } from "react-router-dom"

function ErrorPage(){

    const error = useRouteError();
    console.log(error)

    return (
        <>
            <main>
                <h1>Oops! Something Went Wrong :/ </h1>
            </main>
        </>
    );
}

export default ErrorPage;