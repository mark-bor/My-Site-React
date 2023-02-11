import mobile from "./Images/mobile-icon.png";
import email from "./Images/email-icon.jpg";
import facebook from "./Images/fb-icon.png";
import telegram from "./Images/telegram-icon.png";
import instagram from "./Images/instagram.png";
import linkedin from "./Images/linkedin.png";
import twitter from "./Images/Twitter.png";
import github from "./Images/GitHub.png";

import "./contacts.css";

export default function Contacts({lang}) {
    if (lang==='EN') {
        return (
            <section className="div con" id="contacts">
                {/* __________ TITLE _____________________ */}
                <h1 className="title light_dark">Contacts</h1>
    
                <address className="phone-email light_dark">+38 095 762 56 69<br />mark12bor@gmail.com</address>
                
                {/* __________ CONTACTS _____________________ */}
                <div className="contacts">
                    <div className="string-icons">
                        <div className="par-icons">
                            <a href="tel:+380957625669">
                                <img className="icon" src={mobile} alt="phone" />
                            </a>
    
                            <a target="_blank" rel="noreferrer" href="mailto:mark12bord@gmail.com">
                                <img className="icon" src={email} alt="email" />
                            </a>
                        </div>
    
                        <div className="par-icons">
                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/mark.uvarov.1">
                                <img className="icon" src={facebook} alt="facebook" />
                            </a>
    
                            <a target="_blank" rel="noreferrer" href="https://t.me/marchi003">
                                <img className="icon" src={telegram} alt="telegram" />
                            </a>
                        </div>
    
                        <div className="par-icons" id="par">
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/uvarovjr">
                                <img className="icon" src={instagram} alt="instagram" />
                            </a>
    
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mark-bordakov-8441bb241/">
                                <img className="icon" src={linkedin} alt="linkedin" />
                            </a>
                        </div>
    
                        <div className="par-icons" id="par">
                            <a target="_blank" rel="noreferrer" href="https://twitter.com/uvarov_mark">
                                <img className="icon" src={twitter} alt="twitter" />
                            </a>
    
                            <a target="_blank" rel="noreferrer" href="https://github.com/mark-bor?tab=repositories">
                                <img className="icon" src={github} alt="github" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (lang==='UA') {
        return (
            <section className="div con" id="contacts">
                {/* __________ TITLE _____________________ */}
                <h1 className="title light_dark">Контакти</h1>
    
                <address className="phone-email light_dark">+38 095 762 56 69<br />mark12bor@gmail.com</address>
                
                {/* __________ CONTACTS _____________________ */}
                <div className="contacts">
                    <div className="string-icons">
                        <div className="par-icons">
                            <a href="tel:+380957625669">
                                <img className="icon" src={mobile} alt="номер телефону" />
                            </a>
    
                            <a target="_blank" rel="noreferrer" href="mailto:mark12bord@gmail.com">
                                <img className="icon" src={email} alt="пошта" />
                            </a>
                        </div>
                        
                        <div className="par-icons">
                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/mark.uvarov.1">
                                <img className="icon" src={facebook} alt="фейсбук" />
                            </a>
    
                            <a target="_blank" rel="noreferrer" href="https://t.me/marchi003">
                                <img className="icon" src={telegram} alt="телеграм" />
                            </a>
                        </div>
                        
                        <div className="par-icons" id="par">
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/uvarovjr">
                                <img className="icon" src={instagram} alt="інстаграм" />
                            </a>
    
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mark-bordakov-8441bb241/">
                                <img className="icon" src={linkedin} alt="лінкед ін" />
                            </a>
                        </div>
                        
                        <div className="par-icons" id="par">
                            <a target="_blank" rel="noreferrer" href="https://twitter.com/uvarov_mark">
                                <img className="icon" src={twitter} alt="твітер" />
                            </a>
    
                            <a target="_blank" rel="noreferrer" href="https://github.com/mark-bor?tab=repositories">
                                <img className="icon" src={github} alt="гітхаб" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}