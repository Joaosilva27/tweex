import { signInWithPopup } from "firebase/auth";
import React from "react";
import GoogleButton from "react-google-button";
import { auth, googleAuthProvider } from "../firebase";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      console.log(result);
      localStorage.setItem("token", result.user.accessToken);
      navigate("/");
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <GoogleButton onClick={handleSignInWithGoogle} />
    </div>
  );
};

export default Login;
