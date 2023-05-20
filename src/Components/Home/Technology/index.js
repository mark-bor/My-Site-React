import { showInformation } from "../../../scripts/Home/showInformation";

import './styles.css';



export default function Technology({setContent, setWindow, data, text}) {
    return (
        <li><img 
            className='logo_of_tech' src={data.image} 
            title={data.title} alt={data.title.toLowerCase()+' '+text} width={50} 
            onClick={() => showInformation(setContent, setWindow, data.title)}
        /></li>
    );
}