import React from 'react';
import UserIf from '../models/UserIf';
import "./UserCard.css"



const UserCard: React.FC<UserIf> = (user: UserIf) => {

    console.log(user.image)
    
    return (
        <div className="userCard">
            <img src={user.image} alt='profile photo' className="user-image" />
            <div className="user-info">
                <h3 className="userName">{user.userName}</h3>
                <button className="viewCollection">View Collection</button>
            </div>
        </div>
    );
};

export default UserCard;

