import CryptoJs from "crypto-js";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../CSS/headerModal.css";
import Login from "./Login";
import MyPage from "./MyPage";
import { HiOutlineLockOpen, HiUserCircle } from "react-icons/hi";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";

const HeaderModal = ({ userLogin }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [cart, setCart] = useState(false);
  const [order, setOrder] = useState(false);
  const [myPage, setMyPage] = useState(false);

  let Email = localStorage.getItem("email");
  let Password = localStorage.getItem("password");
  let Name = localStorage.getItem("name");
  let Tel = localStorage.getItem("tel");
  let Birth = localStorage.getItem("birth");
  let joinDate = localStorage.getItem("joinDate");

  let userObj = {
    Email,
    Password,
    Name,
    Tel,
    Birth,
    joinDate,
  };

  const shoeModal = (e) => {
    switch (e.target.innerText) {
      case "로그인":
        return setIsLogin(!isLogin);
      case "로그아웃":
        return localStorage.clear(), window.location.reload();
      case "장바구니":
        return console.log("장바구니");
      case "주문내역":
        return console.log("주문내역");
      case "마이페이지":
        return setMyPage(!myPage);
      default:
        return;
    }
  };

  return (
    <>
      <div className={"headerModalPosition"}>
        <div className={"headerModalBox"}>
          <ul className={"headerModalUL"}>
            {/*<Link>로 감싸주기*/}
            <li className={"headerModalLI"} onClick={shoeModal}>
              {userLogin ? (
                <>
                  {CryptoJs.AES.decrypt(userObj.Name, "sha512").toString(
                    CryptoJs.enc.Utf8
                  )}

                  <button>
                    <HiOutlineLockOpen />
                    로그아웃
                  </button>
                </>
              ) : (
                "로그인"
              )}
            </li>
            <Link to="/cart">
              <li className={"headerModalLI"} onClick={shoeModal}>
                <AiOutlineShoppingCart />
                장바구니
              </li>
            </Link>
            <li className={"headerModalLI"} onClick={shoeModal}>
              <BiShoppingBag />
              주문내역
            </li>
            <li className={"headerModalLI"} onClick={shoeModal}>
              <HiUserCircle />
              마이페이지
            </li>
          </ul>
        </div>
      </div>
      {isLogin ? <Login /> : null}
      {userLogin && myPage ? <MyPage userObj={userObj} /> : null}
    </>
  );
};

export default HeaderModal;
