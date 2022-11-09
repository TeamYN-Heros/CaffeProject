import CryptoJs from "crypto-js";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../CSS/headerModal.css";
import Login from "./Login";
import MyPage from "./MyPage";
import { HiOutlineLockOpen, HiUserCircle } from "react-icons/hi";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/authSlice";

const HeaderModal = () => {
  let key = [];
  let userObj = [];
  const auth = useSelector((state) => state.auth.value);
  const [isLogin, setIsLogin] = useState(auth);
  const [myPage, setMyPage] = useState(false);

  for (let i = 0; i < localStorage.length; i++) {
    key[i] = localStorage.key(i);
  }
  key.forEach(
    (key, index) =>
      (userObj[index] = JSON.parse(localStorage.getItem(`${key}`)))
  );

  const dispatch = useDispatch();

  const shoeModal = (e) => {
    switch (e.target.innerText) {
      case "로그인":
        return setIsLogin(!isLogin);
      case "로그아웃":
        return localStorage.removeItem("accessToken"), window.location.reload();
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
              {auth ? (
                <>
                  {userObj.map((user) => {
                    if (
                      user.accessToken ===
                      Number(localStorage.getItem("accessToken"))
                    ) {
                      return CryptoJs.AES.decrypt(user.name, "sha512").toString(
                        CryptoJs.enc.Utf8
                      );
                    }
                  })}
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
              <li className={"headerModalLI"}>
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
      {auth || isLogin ? null : <Login />}
      {auth && myPage ? <MyPage userObj={userObj} /> : null}
    </>
  );
};

export default HeaderModal;
