import Friends from '../assets/friends.svg'
import Mail from '../assets/mail.svg'
import Sent from '../assets/sent.svg'
import Notifications from '../assets/notifications.svg'
import NewLetter from '../assets/new_letter.svg'
import ProfileButton from "./ProfileButton.jsx";
import useIsMobile from "./useIsMobile.js";

function Navbar(props) {
    const isMobile = useIsMobile();

    return(
        <div id={'navbar'}>
            {/*o && é um short-circuit evaluation, uma versão ainda mais resumida do operador ternário
            se o valor da esquerda for falso, ele não faz nada, mas se o valor for true, ele devolve o valor da direita*/}
            {!isMobile && <ProfileButton/>}
            <button onClick={props.mail}>
                <img src={Mail} alt={'mail-icon'}/>
            </button>
            <button onClick={props.sent}>
                <img src={Sent} alt={'sent-icon'}/>
            </button>
            <button onClick={props.friends}>
                <img src={Friends} alt={'friends-icon'}/>
            </button>
            <button>
                <img src={Notifications} alt={'friends-icon'}/>
            </button>
            {!isMobile && <button>
                             <img src={NewLetter} alt={'friends-icon'}/>
                          </button>}
        </div>
    );
}

export default Navbar