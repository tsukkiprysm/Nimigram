import {useState} from "react";
import UserMail from "./UserMail.jsx";
import UserSentMail from "./UserSentMail.jsx";
import UserFriends from "./UserFriends.jsx";

function DashboardListing(props) {
    return(
        <section id={'dashboard-listing'}>
            <h1>{props.listName}</h1>
            <hr></hr>
            <select></select>
            <div>{props.list}</div>
        </section>
    );
}

export default DashboardListing;