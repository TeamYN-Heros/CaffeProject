import { useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import { useDispatch } from "react-redux";
import { addToCarts } from "../features/cart/cartSlice";
import "../CSS/Modal.css";

/* eslint-disable jsx-a11y/alt-text */
const ItemLayout = ({ name, image, desc, idx, price, nutrients, menuCode }) => {
  const dispatch = useDispatch();
  const [length, setLength] = useState(10); // 펼치기, 접기 기능
  const [toggle, setToggle] = useState(false); // 펼치기, 접기 기능
  const [modal, setModal] = useState(false); // 모달 창 온오프 기능
  const [view, setView] = useState({}); // 결제 창 상품 정보 불러오기
  const [count, setCount] = useState(0); // 수량 정보
  let [timer, setTimer] = useState(120);
  // 수량 추가 및 제거
  const Increase = () => {
    setCount(count + 1);
  };

  const Decrease = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };
  // 설명 펼치기 / 접기 기능
  const showDesc = () => {
    if (toggle !== true) {
      setLength(desc.length);
      setToggle(!toggle);
    } else {
      setToggle(!toggle);
      setLength(10);
    }
  };

  // 모달 상품 결제 창 정보 출력

  const modalMenu = () => {
    let mImage = document.getElementById(idx).children[0].currentSrc;
    let mName = document.getElementById(idx).children[1].innerText;
    let mSize = document.getElementById(idx).querySelector(".size").value;
    let mMilkType = document
      .getElementById(idx)
      .querySelector(".milkType").value;
    let mDrinkType = document
      .getElementById(idx)
      .querySelector(".drinkType").value;
    let mAmount = document
      .getElementById(idx)
      .querySelector(".amount").innerText;
    if (
      mSize === "xx" ||
      mMilkType === "xx" ||
      mDrinkType === "xx" ||
      mAmount === "0"
    ) {
      return;
    }
    setView({
      accessToken: sessionStorage.getItem("accessToken"),
      mImage,
      mName,
      desc,
      mSize,
      mMilkType,
      mDrinkType,
      mAmount,
      price,
      menuCode,
    });
    setModal(!modal);
  };
  // 모달창 닫기 기능 및 각 상품 선택 메뉴 초기화
  const ModalClose = () => {
    document.getElementById(idx).querySelector(".size").value = "xx";
    document.getElementById(idx).querySelector(".milkType").value = "xx";
    document.getElementById(idx).querySelector(".drinkType").value = "xx";
    document.getElementById(idx).querySelector(".amount").innerText = "0";
    setView({});
    setCount(0);
    setModal(false);
  };

  const onCart = (e) => {
    e.preventDefault();
    view.price = total;
    for (let i = 0; i < localStorage.length - 2; i++) {
      if ("cart" + Math.round(Math.random() * 100) === localStorage.key(i)) {
        return;
      }
    }
    localStorage.setItem(
      "cart" + Math.round(Math.random() * 100),
      JSON.stringify(view)
    );
  };

  let sizePrice = 0;
  const calculator = () => {
    switch (view.mSize) {
      case "venti":
        sizePrice += 500;
        break;
      case "grante":
        sizePrice += 200;
        break;
      default:
        break;
    }
    switch (view.mMilkType) {
      case "lawfat":
        sizePrice += 200;
        break;
      default:
        break;
    }
  };

  calculator();
  let total = view.price * view.mAmount + sizePrice;

  if (modal === true) {
    setInterval(() => {
      if (timer === 0) {
        sessionStorage.removeItem("accessToken");
        setTimer(120);
        ModalClose();
        return;
      }
      setTimer(--timer);
    }, 1000);
  }

  return (
    <>
      <span className="ItemLayout" id={idx}>
        <img src={image} id="MenuImg" />
        <h3>{name}</h3>
        <p>
          {desc.length > 10 ? <>{desc.slice(0, length)}</> : desc}
          {toggle ? null : "..."}
          <button onClick={showDesc}>{toggle ? "접기" : "펼치기"}</button>
        </p>
        <div className="ItemAttribute">
          <span>Size</span>
          <span>
            <select className="size">
              <option value="xx">Size</option>
              <option value="venti">Venti (+500)</option>
              <option value="grante">Grante (+200)</option>
              <option value="tall">Tall (기본)</option>
            </select>
          </span>
        </div>
        <div className="ItemAttribute">
          <span>Milk</span>
          <select className="milkType">
            <option value="xx">Milk type</option>
            <option value="nomal">Nomal (기본)</option>
            <option value="lawfat">Law Fat (+200)</option>
          </select>
        </div>
        <div className="ItemAttribute">
          <span>Drink</span>
          <select className="drinkType">
            <option value="xx">Drink type</option>
            <option value="ice">Ice</option>
            <option value="hot">Hot</option>
          </select>
        </div>
        <div className="ItemAttribute">
          <span id="amount">Amount</span>
          <span>
            <span onClick={Decrease}>-</span>
            <span className="amount">{count}</span>
            <span onClick={Increase}>+</span>
          </span>
        </div>
        <button className="BtnBasket" id={idx} onClick={modalMenu}>
          구매하기
        </button>
      </span>
      <Modal isOpen={modal} id="MenuModal">
        <img src={view.mImage} />[
        {Math.floor(timer / 60) + ":" + Math.floor(timer % 60)}]
        <h3>{view.mName}</h3>
        <hr />
        <p>{view.desc}</p>
        <hr />
        <form className="nutrients" onSubmit={onCart}>
          <span>
            <h3>제품 영양 정보</h3>
            <div>{nutrients.sizeDefault}</div>
            <div>1회 제공량 (kcal) : {nutrients.kcal}</div>
            <div>나트륨 (mg) : {nutrients.Na}</div>
            <div>포화지방 : {nutrients.fat}</div>
            <div>당류 : {nutrients.sugar}</div>
            <div>단백질 : {nutrients.protein}</div>
            <div>카페인 : {nutrients.Caffeine}</div>
          </span>
          <span>
            <h3>선택 내역</h3>
            <div>제품 코드 : {view.menuCode}</div>
            <div>사이즈 : {view.mSize}</div>
            <div>우유 종류 : {view.mMilkType}</div>
            <div>Ice / Hot: {view.mDrinkType}</div>
            <div>수량: {view.mAmount}</div>
            <div>가격: {total}원</div>
          </span>
          <hr />
          <span>
            <button onClick={() => dispatch(addToCarts({
              name: view.mName,
              img: view.mImage,
              amount: view.mAmount,
              price: view.price,
              milkType: view.mMilkType,
              size: view.mSize,
              drinkType: view.mDrinkType,
            }))}>담기</button>
            <button>결제하기</button>
            <button id="ModalClose" onClick={ModalClose}>
              닫기
            </button>
          </span>
        </form>
      </Modal>
    </>
  );
};

export default ItemLayout;
