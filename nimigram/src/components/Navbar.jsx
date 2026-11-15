import Friends from '../assets/friends.svg'
import Mail from '../assets/mail.svg'
import Sent from '../assets/sent.svg'
import ProfileButton from "./ProfileButton.jsx";
import {useEffect, useState} from "react";

function Navbar(props) {

    return(
        <div id={'navbar'}>
            <button onClick={props.mail}>
                <img src={Mail} alt={'mail-icon'}/>
            </button>
            <button onClick={props.sent}>
                <img src={Sent} alt={'sent-icon'}/>
            </button>
            <button onClick={props.friends}>
                <img src={Friends} alt={'friends-icon'}/>
            </button>
        </div>
    );
}

export default Navbar