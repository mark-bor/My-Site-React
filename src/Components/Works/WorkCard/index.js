import { Link } from "react-router-dom";

import "./styles.css";



export default function WorkCard({work, title}) {
	return (
		<li>
			<Link className={`work_card ${work.className} ${work.status}`} to={`/works/${work.link}`}>
				<img 
                    className='project_background' 
                    style={work.imageStyle}
                    src={window.location.origin+work.image} 
                    alt={work.alt} 
                />
				<span className="work_name light_dark">{title}</span>
			</Link>	
		</li>		
	);
}