/* eslint-disable jsx-a11y/alt-text */
import "../CSS/header.css";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../IMAGE/logo.png";
import HeaderModal from "./HeaderModal";
import { useState } from "react";

// 메뉴바 구현
const Header = ({ isLogin }) => {
  console.log(isLogin);
  const [open, setOpen] = useState(false);
  const ToggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="header">
        <img src={Logo} />
        <span className="item">ALL</span>
        <span className="item">COFFEE</span>
        <span className="item">TEA</span>
        <input className="item" id="searchBar" placeholder="search" />
        <span className="item">
          <AiOutlineMenu onClick={ToggleOpen} />
          {open === true ? <HeaderModal userLogin={isLogin} /> : null}
        </span>
      </div>
    </>
  );
};

export default Header;
