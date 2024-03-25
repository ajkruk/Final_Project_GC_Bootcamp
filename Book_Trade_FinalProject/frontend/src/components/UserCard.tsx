import React from 'react';
import UserIf from '../models/UserIf';



const UserCard: React.FC<UserIf> = ({userName, image}: UserIf) => {
    
    return (
        <div className="userCard">
            <img src={image} alt='profile photo' className="user-image" />
            <div className="user-info">
                <h3 className="userName">{userName}</h3>
                <button className="viewCollection">View Collection</button>
            </div>
        </div>
    );
};

export default UserCard;

