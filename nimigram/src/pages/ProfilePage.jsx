import pfp1 from '../assets/pfp1.jpg'
import arrowBack from "../assets/arrow_back.svg"
import {Link, Navigate} from "react-router-dom";
import {useAuth} from "../authContext/AuthContext.jsx";
import {logout} from "../firebase/auth.js";

function ProfilePage(user) {
    const {userLoggedIn, userProfile} = useAuth();

    console.log(userProfile)

    return(
        <>
            {!userLoggedIn && <Navigate to={'/'}></Navigate>}
            <section id={'profile-page'}>
                <div style={{position: 'absolute'}}>
                    <Link to={'/dashboard'}>
                        <img src={arrowBack} alt={'Go back'}/>
                    </Link>
                </div>
                <div id={'profile-page-content'}>
                    <img src={pfp1} alt={'Profile Picture'}/>
                    <h1>{userProfile && userProfile.name}</h1>
                    <p>{userProfile && userProfile.username}</p>
                    <p>{userProfile && userProfile.bio}</p>
                    <hr></hr>
                    <button>Editar perfil</button>
                    <button>Compartilhar perfil</button>
                    <button onClick={logout}>Sair</button>
                </div>
            </section>
        </>
    );
}

export default ProfilePage