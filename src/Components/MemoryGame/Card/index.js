

export default function Card({object, altName}) {
    return (
        <li className="game__card js-card" data-animal={object.subjectEN}>
            <p className="game__back-card question">?</p>
            
            <div className="game__front-card">
                <img src={window.location.origin + object.image} alt={altName} height="70" />
            </div>
        </li>
    );
}