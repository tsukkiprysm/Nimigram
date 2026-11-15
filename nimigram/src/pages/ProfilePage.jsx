import pfp1 from '../assets/pfp1.jpg'
import Navbar from "../components/Navbar.jsx";
import {useState} from "react";
import UserMail from "../components/UserMail.jsx";
import UserSentMail from "../components/UserSentMail.jsx";
import UserFriends from "../components/UserFriends.jsx";
import arrowBack from "../assets/arrow_back.svg"
import {Link} from "react-router-dom";

function ProfilePage(user) {
    return(
        <>
            <section id={'profile-page'}>
                <div style={{position: 'absolute'}}>
                    <Link to={'/dashboard'}>
                        <img src={arrowBack} alt={'Go back'}/>
                    </Link>
                </div>
                <div id={'profile-page-content'}>
                    <img src={pfp1} alt={'Profile Picture'}/>
                    <h1>User name</h1>
                    <p>@useridentifier</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque enim eros, auctor sed ligula vel, congue auctor sem.
                    </p>
                    <hr></hr>
                    <button>Editar perfil</button>
                    <button>Compartilhar perfil</button>
                    <button>Sair</button>
                </div>
            </section>
        </>
    );
}

export default ProfilePage