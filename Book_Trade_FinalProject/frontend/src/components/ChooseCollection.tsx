import { useEffect, useState } from "react"
import UserIf from "../models/UserIf";
import UserCard from "./UserCard"
import { getAllUsers } from "../services/UserServices";


function ChooseCollection() {
    const [userCards, setUserCards] = useState<UserIf[]>([]); //naming array of objects and creating empty array

    useEffect(() => {
        

        getAllUsers().then((response: UserIf[]) => {
            console.log(`response: ${response}`)
            setUserCards(response) 
        }).catch((error) => {
            console.log(error.message)
        })  
    }, []);
    

    return (
        <div>
            <h1>Choose a Collection</h1> 

            {userCards ? userCards.map((userCard: UserIf) => {
                const image = userCard.image.replace('blob:', '')
                console.log(`userCard: ${userCard.userName}`)
                console.log(`userImage: ${image}`)
                
                return <UserCard userName={""} image={""}/>
            }) : <></>}
        </div>
    )
}

export default ChooseCollection

//userCards above is checking if the array empty or not, if it is not empty it will do what is after the ? in this instance we are looping through the array to create a card for each item (map)
//if not, it will do what is after the colon, here it will display a fragment to display nothing