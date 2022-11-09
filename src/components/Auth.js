import { useEffect } from "react";
import App from "../App";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/authSlice";

const Auth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      dispatch(login());
    } else {
      dispatch(logout());
    }
  }, []);

  return <App />;
};

export default Auth;
