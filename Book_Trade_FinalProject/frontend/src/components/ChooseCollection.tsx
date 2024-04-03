import { useEffect, useState } from "react"
import UserIf from "../models/UserIf";
import UserCard from "./UserCard"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";


function ChooseCollection() {
    const [userCards, setUserCards] = useState<UserIf[]>([]); //naming array of objects and creating empty array
   

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "users"));
                const userCardInfo: UserIf[] = [];
                querySnapshot.forEach((doc) => {
                    const userData = doc.data();
                    userCardInfo.push(userData as UserIf);

                    console.log(doc.id, "=>", doc.data());
                });
                console.log('user cards:', userCardInfo);
                setUserCards(userCardInfo);
            } catch (error) {
                console.error('Error returning user info:');
            }
  
        };
        fetchUsers();
    }, []);
    

    return (
        <div>
            <h1>Choose a Collection</h1> 

            {userCards ? userCards.map((userCard: UserIf) => {
                console.log(`userCard: ${userCard.displayName}`)
                console.log(`userImage: ${userCard.profilePicture}`)
                console.log(`_id: ${userCard.id}`)
                
                return <UserCard displayName={userCard.displayName} profilePicture={userCard.profilePicture} id={userCard.id}/>
            }) : <></>}
        </div>
    )
}

export default ChooseCollection

