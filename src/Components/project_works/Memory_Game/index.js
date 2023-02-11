import { useState, useEffect } from "react";
import { addEvent } from "./Class/MemoryGame";

import "./memory_game.css";


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



function Card({object, altName}) {
    return (
        <li className="game__card js-card" data-animal={object.subjectEN}>
            <p className="game__back-card question">?</p>
            
            <div className="game__front-card">
                <img src={window.location.origin + object.image} alt={altName} height="70" />
            </div>
        </li>
    );
}