import React from 'react';
import UserIf from '../models/UserIf';
import "./UserCard.css"
import { useNavigate } from "react-router-dom"; // First Add useNavigate

// import {Link} from 'react-router-dom'



const UserCard: React.FC<UserIf> = (user: UserIf) => {

    const navigate = useNavigate()
    console.log(`UserCard: ${user.id}`)
    return (
        <div className="userCard">
            <img src={user.profilePicture} alt='profile photo' className="user-image" />
            <div className="user-info">
                <h3 className="userName">{user.displayName}</h3>
                <button type="button" className="viewCollection" onClick={() => navigate('/ViewUserCollection', {state: {ownerId: user.id}})}>View Collection</button>
            </div>
        </div>
    );
};

export default UserCard;

