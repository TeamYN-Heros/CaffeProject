/* eslint-disable jsx-a11y/alt-text */
import "../CSS/header.css";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../IMAGE/logo.png";
import HeaderModal from "./HeaderModal";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// 메뉴바 구현
const Header = () => {
  let [sessionCount, setSessionCount] = useState(900);
  const [open, setOpen] = useState(false);
  const ToggleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (sessionStorage.getItem("accessToken")) {
      setInterval(() => {
        if (sessionCount === 0) {
          sessionStorage.removeItem("accessToken");
          setSessionCount(900);
          window.location.reload();
          return;
        }
        setSessionCount(--sessionCount);
      }, 1000);
    }
  }, [sessionCount]);

  return (
    <>
      <div className="header">
        <Link to="/">
          <img src={Logo} />
        </Link>
        <span className="item">ALL</span>
        <span className="item">COFFEE</span>
        <span className="item">TEA</span>
        <input className="item" id="searchBar" placeholder="search" />
        {sessionStorage.getItem("accessToken") ? (
          <>
            <span>
              남은 시간 [{Math.floor(sessionCount / 60)}:
              {Math.floor(sessionCount % 60)}]
            </span>
          </>
        ) : null}
        <span className="item">
          <AiOutlineMenu onClick={ToggleOpen} />
          {open === true ? <HeaderModal /> : null}
        </span>
      </div>
    </>
  );
};

export default Header;
