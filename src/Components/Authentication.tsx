import { Fab, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import "./Authentication.css";
interface IAuthentication {
  title: string;
  isLoginVisible: boolean;
  isSignUpVisible: boolean;
  isUserNameVisible: boolean;
 onSubmitClick: (user: IUser)=>Promise<string>;
}
export interface IUser {
  name: string;
  email: string;
  password: string;
}

export default function Authentication(props: IAuthentication) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<IUser>();
    
      const navigate=useNavigate();
      const [errorMessage,setErrorMessage]=useState<string>('');
     async function onSubmitClick(data:IUser)
      {
        const message =  await props.onSubmitClick(data)
        if(message)
        setErrorMessage(message)
      }
     
       

  return (
    <form onSubmit={handleSubmit(onSubmitClick)}>
      <div className="outer_box">
        <div className="inner_box">
          <Typography variant="h5">{props.title}</Typography>
          {props.isUserNameVisible && <TextField
            variant="outlined"
            placeholder="UserName"
            required
         error={errors?.name?.message !== undefined}
            helperText={errors?.name?.message}
            {...register("name",{ 
                required:true,
                minLength:{value:4, message:"Name Must be of four charters"}
    
            })}
          />}

          <TextField
          type="email"
            variant="outlined"
            placeholder="Email"
            {...register("email",{required:true})}
            required
          />

          <TextField
          type="password"
            variant="outlined"
            placeholder="Password"
            required
            error={errors?.password?.message !== undefined}
            helperText={errors?.password?.message}
            {...register("password",
            {
           required:true,
           minLength:{value:6,message:"Password Must be of 6 charters"}
   
        })}
          />
          <div className="btn_pro">
            <Fab variant="extended" color="primary" type="submit">
              Submit
            </Fab>
            <Fab variant="extended" color="secondary" onClick={() => reset()}>
              Reset
            </Fab>
         {props.isLoginVisible  &&  <Fab variant="extended" onClick={()=> navigate("/login")}>Login</Fab>}
            { props.isSignUpVisible && <Fab variant="extended" onClick={()=> navigate("/Signup")}>Signup</Fab>}
            <Fab variant="extended" onClick={()=> navigate("/")}>Home</Fab>
          </div>
        </div>
        {errorMessage && <Typography variant="h5">{errorMessage}</Typography>}
      </div>
    </form>
  );
}

