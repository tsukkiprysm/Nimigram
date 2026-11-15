import {Link} from "react-router-dom";
import pfp1 from '../assets/pfp1.jpg'

function ProfileButton(props) {

    const userPfp = {};

    const toProfile = () => {

    }

    return(
        <div id={'profile-button'} style={{display: props.disp}}>
            <Link to={'/perfil'}>
                <img src={pfp1} alt={'Profile Picture'}/>
            </Link>
        </div>
    );
}

export default ProfileButton;