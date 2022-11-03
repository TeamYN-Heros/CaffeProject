/* eslint-disable jsx-a11y/alt-text */
import "../CSS/header.css";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "../IMAGE/logo.png";

// 메뉴바 구현
const Header = () => {
  return (
    <div className="header">
      <img src={Logo} />
      <span className="item">COFFEE</span>
      <span className="item">TEA</span>
      <span className="item">MENU</span>
      <input className="item" id="searchBar" placeholder="search" />
      <span className="item">
        <AiOutlineShoppingCart />
      </span>
      <span className="item">
        <AiOutlineMenu />
      </span>
    </div>
  );
};

export default Header;