

export default function MemoryGameCard({data, altName}) {
    return (
        <li className="game__card js-card" data-animal={data.subjectEN}>
            <p className="game__back-card question">?</p>
            
            <div className="game__front-card">
                <img src={data.image} alt={altName} height="70" />
            </div>
        </li>
    );
}