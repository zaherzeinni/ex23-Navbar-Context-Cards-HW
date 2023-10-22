import React, { useEffect } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Login = ({ isAuth, setIsAuth }) => {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      navigate("/");

      setIsAuth(true);
    });
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }

    // execute this function when isAuth  and navigate change
  }, [isAuth, navigate]);

  return (
    <div className=" loginPage">
      <p>Sign In With Google to Continue</p>

      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign In with Google
      </button>
    </div>
  );
};

export default Login;
