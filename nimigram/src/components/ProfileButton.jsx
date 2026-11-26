import {useNavigate} from "react-router-dom";
import pfp1 from '../assets/pfp1.jpg'

function ProfileButton(props) {

    const navigate = useNavigate()

    const userPfp = {};

    const toProfile = () => {

    }

    const handleClick = (e) => {
        navigate('/perfil');
    }

    return(
        <button onClick={(e) => handleClick(e)}>
            <img src={pfp1} alt={'Profile Picture'} className={'profile-button-nav'}/>
        </button>
    );
}

export default ProfileButton;