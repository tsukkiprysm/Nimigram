import ProfileButton from "../components/ProfileButton.jsx";
import DashboardListing from "../components/dashboardComponents/DashboardListing.jsx";
import Navbar from "../components/Navbar.jsx";
import {useEffect, useState, ViewTransition, startTransition} from "react";
import UserMail from "../components/dashboardComponents/UserMail.jsx";
import UserSentMail from "../components/dashboardComponents/UserSentMail.jsx";
import UserFriends from "../components/dashboardComponents/UserFriends.jsx";
import useIsMobile from "../components/useIsMobile.js";

export default function Dashboard() {
    const [list, setList] = useState(<UserMail/>);
    const [listName, setListName] = useState("Meu correio");
    const isMobile = useIsMobile();

    const handleChangeToUserMail = () => {
        startTransition(() => {
            setList(l => <UserMail/>);
            setListName(ln => "Meu correio");
        })
    }

    const handleChangeToUserSentMail = () => {
        startTransition(() => {
            setList(l => <UserSentMail/>);
            setListName(ln => "Meu correio enviado");
        })
    }

    const handleChangeToUserFriends = () => {
        startTransition(() => {
            setList(l => <UserFriends/>);
            setListName(ln => "Meus amigos");
        })
    }

    return(
        <main id={'dashboard'}>
            {isMobile && <div className={'profile-button-container'}>
                            <ProfileButton/>
                         </div>}
            <ViewTransition>
                <DashboardListing
                    list={list}
                    listName={listName}/>
            </ViewTransition>
            <Navbar
                mail={handleChangeToUserMail}
                sent={handleChangeToUserSentMail}
                friends={handleChangeToUserFriends}/>
        </main>
    );
}