import { Fab, Typography } from "@mui/material";
import { signOut, updateProfile } from "firebase/auth";

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "./ContextParent";
import { auth } from "./firebaseSetup";
import { deleteObject,getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";
import './Profile.css'
import LoadingSpinner from "./LoadingSpinner";
import { toast } from "react-toastify";
import SignoutPopup from "./SignoutPopup";
export default function Profile()
{
    const user=useContext(Context)
    const navigate=useNavigate();
    const [photo, setPhoto] = useState(null);
    const [popup, Setpopup] = useState<boolean>(false)
    const [loading, setLoading] = useState(false);
    const [photoURL, setPhotoURL] = useState("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png");
    const storage = getStorage();
    function handleChange(e:any) {
      if (e.target.files[0]) {
        setPhoto(e.target.files[0])
        console.log(e.target.files[0])
      }
    }
    async function upload(file:any, user:any) {
      try{
        const fileRef = ref(storage, user.uid + '.jpg');
      
        setLoading(true);
        
          await uploadBytes(fileRef, file);
        const photoURL = await getDownloadURL(fileRef);
     
        
            setPhotoURL(user.photoURL);
         
         console.log(photoURL)
        updateProfile(user, {photoURL:photoURL});
   
       
        setLoading(false);
         toast.success('Profile Uploaded sucessfully!');
         window.location.reload()
        setPhoto(null)
      }
      catch(e:any)
      {
        console.log(e.message)
      }
      }
  
    function handleClickUpload() {
      upload(photo, user);
      
    }
    async function upload1(file:any, user:any) {
      try{
     const fileRef = ref(storage, user.uid + '.jpg');
        let pictureRef = ref(storage, user.uid+'.jpg');
        deleteObject(pictureRef).then(()=>
        console.log("deleted"))
      setLoading(true);
        
    await uploadBytes(fileRef, file);
      const photoURL = await getDownloadURL(fileRef);
   
        
        setPhotoURL("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png");
         
      //{console.log(photoURL)} 
        updateProfile(user, {photoURL:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"});
   
       
        setLoading(false);
         toast.success('Profile Deleted sucessfully!')
 setPhoto(null)
      }
      catch(e:any)
      {
        console.log(e.message)
      }
      }
    async function handleClickDelete(file:any, user:any)
    {
   

      upload1(photo, user);

    }
    function CheckPhoto()
    {
      if(photoURL==="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png")
      return true;
      else
      return false;
    }

    useEffect(() => {
      try{
      if (user?.photoURL) {
    
      //{console.log(photoURL)} 
        setPhotoURL(user.photoURL);
      }
      else{
        setPhotoURL("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png");
      }
     }
     catch(e:any){
      console.log("error")

     }}, [user,photoURL])
  const logout = async () => {
    await signOut(auth);
    navigate('/')
  }
  
    if(user)
    {
       // {console.log(photoURL)} 
      //{console.log(photo)}
        return(
          <>
            <div className="profile_main">
                <div className="inside_profile">
                {loading && <LoadingSpinner text="Uploading Photo"/>}
                <Typography variant='h5'>Welcome to Profile page</Typography>
                <div className='name'>
                  <Typography variant="h6">Name:</Typography>
                 <Typography variant="h6">{user.displayName}</Typography>
                 </div>
                 <div className='email'>
                  <Typography variant="h6">Login Email:</Typography>
                 <Typography className="email_ac" variant="h6">{user.email}</Typography>
                 </div>
                 <label htmlFor="files" className="btn1">Select Profile Photo</label>
                <input id="files" type="file" onChange={(e)=>{handleChange(e)}}/>
             
                 <button disabled={!photo} onClick={()=>{handleClickUpload()}}>Upload</button>
                 <button disabled={CheckPhoto()} onClick={()=>{handleClickDelete(photo,user)}}>Delete</button>
                
                <img src={photoURL} alt="Avatar" className="avatar" />
                 <div className="btn">
                 <Fab variant="extended" onClick={()=>navigate('/')}>Home</Fab>
                 <Fab variant="extended" onClick={()=>{Setpopup(!popup);console.log(popup)}}>SignOut</Fab>
              
                
                 </div>
              
                </div>
             
            </div>
          
            <SignoutPopup popup1={popup} setpop1={Setpopup} signout={logout}></SignoutPopup>
            </>
        )
    }
    else
    {
       return <></>
    }
}