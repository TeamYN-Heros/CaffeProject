import { useEffect } from "react";
import App from "../App";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/authSlice";

const Auth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionStorage.getItem("accessToken")) {
      dispatch(login());
    } else {
      dispatch(logout());
    }
  }, []);

  return <App />;
};

export default Auth;
