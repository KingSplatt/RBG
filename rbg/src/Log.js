import React from "react";
import imagen from "./img/CoppelLogo.png";

function Log() {
    return (
        <body>
            <header>
                Coppel
                <img src={imagen} alt="Coppel" />
            </header>
            <section>
                <article id="art01">
                    <input type="file"></input>
                </article>
                <article id="art02">
                    Base correcta
                </article>
            </section>
        </body>
    );
}

export default Log;