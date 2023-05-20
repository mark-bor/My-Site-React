import { useEffect } from "react";
import { addEvent } from "../../../scripts/progectWorks/MemoryGame/MemoryGameClass";
import { MemoryGameCard } from "../../../components/index.js";
import { MEMORYGAMECARDS } from "../../../data/MEMORYGAMECARDS";

import "./styles.css";



export default function MemoryGame({lang}) {
    useEffect(() => addEvent());


    if (lang==='EN') {
        return (
            <section className="div mem-gam" id="memory-game">
                {/* __________ TITLE _____________________ */}
                <h1>Memory game</h1>
                {/* __________ BODY _____________________ */}
                <ul className="game__cards js-cards">
                    {MEMORYGAMECARDS.map((data, i) => <MemoryGameCard key={i} data={data} altName={data.subjectEN} />)}
                </ul>
            </section>
        );
    }

    if (lang==='UA') {
        return (
            <section className="div mem-gam" id="memory-game">
                {/* __________ TITLE _____________________ */}
                <h1>Гра для пам'яті</h1>
                {/* __________ BODY _____________________ */}
                <ul className="game__cards js-cards">
                    {MEMORYGAMECARDS.map((data, i) => <MemoryGameCard key={i} data={data} altName={data.subjectUA} />)}
                </ul>
            </section>
        );
    }
}