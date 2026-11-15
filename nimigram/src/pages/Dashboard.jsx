import ProfileButton from "../components/ProfileButton.jsx";
import DashboardListing from "../components/DashboardListing.jsx";
import Navbar from "../components/Navbar.jsx";
import {useEffect, useState} from "react";
import UserMail from "../components/UserMail.jsx";
import UserSentMail from "../components/UserSentMail.jsx";
import UserFriends from "../components/UserFriends.jsx";

export default function Dashboard() {
    const [list, setList] = useState(<UserMail/>);
    const [listName, setListName] = useState("Meu correio");

    const handleChangeToUserMail = () => {
        setList(l => <UserMail/>);
        setListName(ln => "Meu correio");
    }

    const handleChangeToUserSentMail = () => {
        setList(l => <UserSentMail/>);
        setListName(ln => "Meu correio enviado");
    }

    const handleChangeToUserFriends = () => {
        setList(l => <UserFriends/>);
        setListName(ln => "Meus amigos");
    }

    return(
        <main id={'dashboard'}>
            <ProfileButton/>
            <DashboardListing
                list={list}
                listName={listName}/>
            <Navbar
                mail={handleChangeToUserMail}
                sent={handleChangeToUserSentMail}
                friends={handleChangeToUserFriends}/>
        </main>
    );
}