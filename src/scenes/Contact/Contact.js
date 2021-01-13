import { useEffect } from "react";
import ContactMap from "./containers/ContactMap";

function Contact(props) {
    return (
        <div id="divContactContent" className="contentView">
            <div className="stepFour" style={{display: 'none'}}>
                <h1>Follow me, on my journey to world domination...</h1>
                <div id="divContactList" className="contactList">
                    <p><a href="https://linkedin.com/in/aditya-sayyaparaju" target="_blank" rel="noreferrer">@LinkedIn</a></p>
                    <p><a href="https://dribbble.com/PurpleSamosa" target="_blank" rel="noreferrer">@Dribble</a></p>
                    <p><a href="https://github.com/MrPurpleProgrammer" target="_blank" rel="noreferrer">@Github</a></p>
                    <p><a href="mailto:aditya@mrpurple.org" target="_blank" rel="noreferrer">@Email</a></p>
                </div>
            </div>
            <div className="contactMap">
                <ContactMap />
            </div>
        </div>
    )

}

export default Contact