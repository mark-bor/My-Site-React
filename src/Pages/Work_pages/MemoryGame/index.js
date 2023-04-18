import { useState, useEffect } from "react";
import { addEvent } from "../../../scripts/progectWorks/MemoryGame/MemoryGameClass";
import { Card } from "../../../Components/index.js";

import "./styles.css";



export default function MemoryGame({lang}) {
    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        fetch(`${window.location.origin}/JSON/memory_game_cards.json`)
        .then(res => res.json())
        .then(res => setCards([...res]))
        .catch(err => console.log(err));
    }, [setCards]);

    useEffect(() => addEvent(), [cards, setCards]);



    if (lang==='EN') {
        return (
            <section className="div mem-gam" id="memory-game">
                {/* __________ TITLE _____________________ */}
                <h1>Memory game</h1>
                {/* __________ BODY _____________________ */}
                <ul className="game__cards js-cards">
                    {cards.map((card, i) => <Card key={i} object={card} altName={card.subjectEN} />)}
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
                    {cards.map((card, i) => <Card key={i} object={card} altName={card.subjectUA} />)}
                </ul>
            </section>
        );
    }
}