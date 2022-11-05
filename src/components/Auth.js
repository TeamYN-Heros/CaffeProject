import { useEffect, useState } from "react";
import App from "../App";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("email")) {
      setIsLogin(!isLogin);
    }
  }, []);

  return <App isLogin={isLogin} />;
};

export default Auth;
