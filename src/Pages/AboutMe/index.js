import { useContext } from "react";
import { OptionContext } from "../../scripts/index";

import mobile from "../../images/mobile-icon.png";
import email from "../../images/email-icon.jpg";
import facebook from "../../images/fb-icon.png";
import telegram from "../../images/telegram-icon.png";
import linkedin from "../../images/linkedin.png";
import github from "../../images/GitHub.png";
// import instagram from "../../Images/instagram.png";
// import twitter from "../../Images/Twitter.png";
import "./contacts.css";



export default function AboutMe() {
    const {options} = useContext(OptionContext);


    if (options.language==='EN') {
        return (
            <section className="div con">
                {/* __________ TITLE _____________________ */}
                <h1 className="title light_dark">About me</h1>

                <h2 className="second_title">Resumes:</h2>

                <ul className="div_in_cvs">
                    <li>
                        <a 
                            id="button_in_cvs_one" className={`but button_in_cvs button_in_cvs_one`} 
                            target={'_blank'} rel="noreferrer" name="CV 1"
                            href="https://takct-server.netlify.app/CV/Mark%20Bordakov%20-%20Front-end.pdf" 
                        >CV 1</a>
                    </li>
                    <li>
                        <a 
                            id="button_in_cvs_two" className={`but button_in_cvs button_in_cvs_two`} 
                            target={'_blank'} rel="noreferrer" name="CV 2"
                            href="https://takct-server.netlify.app/CV/M%20Bordakov%20-%20Front-end.pdf" 
                        >CV 2</a>
                    </li>
                </ul>
    
                <h2 className="second_title">Contacts:</h2>

                <div className="contacts">
                    <address className="phone_and_email light_dark">
                        +38 095 762 56 69
                        <br />
                        mark12bor@gmail.com
                    </address>
                    
                    {/* __________ CONTACTS _____________________ */}
                    <div className="contact_buttons">
                        <a href="tel:+380957625669">
                            <img className="icon" src={mobile} alt="phone" />
                        </a>

                        <a target="_blank" rel="noreferrer" href="mailto:mark12bord@gmail.com">
                            <img className="icon" src={email} alt="email" />
                        </a>

                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/mark.uvarov.1">
                            <img className="icon" src={facebook} alt="facebook" />
                        </a>

                        <a target="_blank" rel="noreferrer" href="https://t.me/marchi003">
                            <img className="icon" src={telegram} alt="telegram" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mark-bordakov-8441bb241/">
                            <img id="par" className="icon" src={linkedin} alt="linkedin" />
                        </a>

                        <a target="_blank" rel="noreferrer" href="https://github.com/mark-bor?tab=repositories">
                            <img id="par" className="icon" src={github} alt="github" />
                        </a>

                        {/* <a target="_blank" rel="noreferrer" href="https://www.instagram.com/uvarovjr">
                            <img className="icon" src={instagram} alt="instagram" />
                        </a>
                        
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/marchelloreo">
                            <img className="icon" src={twitter} alt="twitter" />
                        </a> */}
                    </div>
                </div>
            </section>
        );
    }

    if (options.language==='UA') {
        return (
            <section className="div con" id="contacts">
                {/* __________ TITLE _____________________ */}
                <h1 className="title">Про мене</h1>

                <h2 className="second_title">Резюме:</h2>

                <ul className="div_in_cvs">
                    <li>
                        <a 
                            id="button_in_cvs_one" className={`but button_in_cvs button_in_cvs_one`} 
                            target={'_blank'} rel="noreferrer" name="Резюме 1"
                            href="https://takct-server.netlify.app/CV/Mark%20Bordakov%20-%20Front-end.pdf" 
                        >Резюме 1</a>
                    </li>
                    <li>
                        <a 
                            id="button_in_cvs_two" className={`but button_in_cvs button_in_cvs_two`} 
                            target={'_blank'} rel="noreferrer" name="Резюме 2"
                            href="https://takct-server.netlify.app/CV/M%20Bordakov%20-%20Front-end.pdf" 
                        >Резюме 2</a>
                    </li>
                </ul>
                
                <h2 className="second_title">Контакти:</h2>
    
                <div className="contacts">
                    <address className="phone_and_email">
                        +38 095 762 56 69
                        <br />
                        mark12bor@gmail.com
                    </address>
                    
                    {/* __________ CONTACTS _____________________ */}
                    <div className="contact_buttons">
                        <a href="tel:+380957625669">
                            <img className="icon" src={mobile} alt="номер телефону" />
                        </a>

                        <a target="_blank" rel="noreferrer" href="mailto:mark12bord@gmail.com">
                            <img className="icon" src={email} alt="пошта" />
                        </a>

                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/mark.uvarov.1">
                            <img className="icon" src={facebook} alt="фейсбук" />
                        </a>

                        <a target="_blank" rel="noreferrer" href="https://t.me/marchi003">
                            <img className="icon" src={telegram} alt="телеграм" />
                        </a>

                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mark-bordakov-8441bb241/">
                            <img id="par" className="icon" src={linkedin} alt="лінкед ін" />
                        </a>

                        <a target="_blank" rel="noreferrer" href="https://github.com/mark-bor?tab=repositories">
                            <img id="par" className="icon" src={github} alt="гітхаб" />
                        </a>
                        
                        {/* <a target="_blank" rel="noreferrer" href="https://www.instagram.com/uvarovjr">
                            <img className="icon" src={instagram} alt="інстаграм" />
                        </a>
                        
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/marchelloreo">
                            <img className="icon" src={twitter} alt="твітер" />
                        </a> */}
                    </div>
                </div>
            </section>
        );
    }
}