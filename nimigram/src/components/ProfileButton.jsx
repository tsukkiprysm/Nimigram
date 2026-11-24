import {Link} from "react-router-dom";
import pfp1 from '../assets/pfp1.jpg'

function ProfileButton(props) {

    const userPfp = {};

    const toProfile = () => {

    }

    return(
        <Link to={'/perfil'}>
            <img src={pfp1} alt={'Profile Picture'} className={'profile-button-nav'}/>
        </Link>
    );
}

export default ProfileButton;