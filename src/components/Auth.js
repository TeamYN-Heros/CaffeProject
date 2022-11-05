import { useEffect, useState } from "react";
import App from "../App";

const Auth = () => {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("email")) {
      setLogin(!login);
    }
  }, []);
  return <App login={login} />;
};

export default Auth;
