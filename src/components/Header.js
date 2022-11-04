/* eslint-disable jsx-a11y/alt-text */
import "../CSS/header.css";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "../IMAGE/logo.png";
import HeaderModal from "./HeaderModal";
import {useEffect, useRef, useState} from "react";
import {handleBlur} from "react-modal/lib/helpers/focusManager";

// 메뉴바 구현
const Header = () => {
    const [modal, setModal] = useState(false);
    const outSection = useRef();

    useEffect(() => {
        const clickOutside = (e) => {
            if (modal && outSection.current && !outSection.current.contains(e.target)) {
                setModal(false);
            }
        };

        document.addEventListener("mousedown", clickOutside);

        return () => {
            document.removeEventListener("mousedown", clickOutside);
        }
    }, [modal]);

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
      <span className="item" ref={outSection}>
        <AiOutlineMenu onClick={() => setModal(!modal)}/>
          {modal === true ? <HeaderModal/> : null}
          {/*<div className={"HeaderModalTrue"}>*/}
          {/*    {modal === true ? <HeaderModal/> : null}*/}
          {/*</div>*/}
      </span>
    </div>
  );
};

export default Header;
