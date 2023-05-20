import "./styles.css";



export default function TimerCircle({name, progress, numeric}) {
    return (
        <div className="circle">
            <svg>
                <circle className='meter' style={{strokeDashoffset: progress}} cx="65" cy="65" r="63" />
            </svg>
            <div className="text-in-circle">
                <h6>{name}</h6>
                <h5>{numeric<10 ? `0${numeric}` : numeric}</h5>
            </div>
        </div>
    );
}
