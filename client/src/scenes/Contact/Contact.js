import { useEffect } from "react";
import ContactMap from "./containers/ContactMap";

function Contact(props) {
    return (
        <div id="divContactContent" className="contentView">
            <div className="stepFour" style={{display: 'none'}}>
                <h1>Follow me, on my journey to world domination...</h1>
                <div id="divContactList" className="contactList">
                    <p>@LinkedIn</p>
                    <p>@Dribble</p>
                    <p>@Github</p>
                    <p>@Email</p>
                </div>
            </div>
            <div className="contactMap">
                <ContactMap />
            </div>
        </div>
    )

}

export default Contact