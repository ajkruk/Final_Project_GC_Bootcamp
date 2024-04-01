import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getDownloadURL, uploadBytes, getStorage, ref } from "firebase/storage";




function UpdateUser() {
    const [displayName, setDisplayName] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [imageUpload, setImageUpload] = useState<Blob>();

    const auth = useAuth();
    const storage = getStorage();

    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `profileImages/${imageUpload}`);
        uploadBytes(imageRef,  imageUpload).then((snapshot): void => {
            console.log(`snapshot: ${snapshot}`)
            getDownloadURL(snapshot.ref).then((url) => {
                alert("Image Uploaded");
                setProfilePicture(url)
                console.log(`upload image url ${url}`)
            })
        })
    }

    const handleSubmit = async () => {
        auth.updateUserProfile(displayName, profilePicture);
    }


       
return (
    <div className="formContainer">
        <form className="updateUserForm" onSubmit={handleSubmit}>
            <label>Create Display Name </label><input type="text" className="displayName"  onChange={(e) => {
                setDisplayName(e.currentTarget.value);
            }} required/>
                <div>
                    <label> Profile Photo </label>
                    <input type="file" onChange={(e) => {
                    if (e.target.files != null){
                        setImageUpload(e.target.files[0]);
                    }
                    {profilePicture && <img id="profilePhoto"src={profilePicture}/>} 
        
                    }} required/>
                    <button type="button" onClick={uploadImage}>Add Photo</button>
                </div>
            <button type="submit">Update Profile</button>

        </form>
    </div>
)
}

export default UpdateUser