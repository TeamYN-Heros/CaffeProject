import { useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import "../CSS/Modal.css";

/* eslint-disable jsx-a11y/alt-text */
const ItemLayout = ({ name, image, desc, idx, nutrients }) => {
  const [length, setLength] = useState(5);
  const [toggle, setToggle] = useState(false);
  const [modal, setModal] = useState(false);
  const [view, setView] = useState({});

  const showDesc = () => {
    if (toggle !== true) {
      setLength(desc.length);
      setToggle(!toggle);
    } else {
      setToggle(!toggle);
      setLength(5);
    }
  };

  const modalMenu = () => {
    setView({
      image: document.getElementById(idx).children[0].currentSrc,
      name: document.getElementById(idx).children[1].innerText,
      desc,
      size: document.querySelector(".size").value,
      milkType: document.querySelector(".milkType").value,
      drinkType: document.querySelector(".drinkType").value,
    });
    setModal(!modal);
    document.querySelector(".size").value = "xx";
    document.querySelector(".milkType").value = "xx";
    document.querySelector(".drinkType").value = "xx";
  };

  return (
    <>
      <span className="ItemLayout" id={idx}>
        <img src={image} id="MenuImg" />
        <h3>{name}</h3>
        <p>
          {desc.length > 5 ? desc.slice(0, length) + "..." : desc}
          {desc.length > 5 ? (
            <button onClick={showDesc}>{toggle ? "접기" : "펼치기"}</button>
          ) : null}
        </p>
        <div className="ItemAttribute">
          <span>Size</span>
          <span>
            <select className="size">
              <option value="xx">Size</option>
              <option value="venti">Venti</option>
              <option value="grante">Grante</option>
              <option value="tall">Tall</option>
            </select>
          </span>
        </div>
        <div className="ItemAttribute">
          <span>Milk</span>
          <select className="milkType">
            <option value="xx">Milk type</option>
            <option value="nomal">Nomal</option>
            <option value="lawfat">Law Fat</option>
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

        <button className="BtnBasket" id={idx} onClick={modalMenu}>
          ADD TO BASKET
        </button>
      </span>
      <Modal isOpen={modal} id="MenuModal">
        <img src={view.image} />
        <h3>{view.name}</h3>
        <hr />
        <p>{view.desc}</p>
        <hr />
        <div className="nutrients">
          <h3>제품 영양 정보</h3>
          <span>{nutrients.size}</span>
          <span>1회 제공량 (kcal) : {nutrients.Kca}</span>
          <span>나트륨 (mg) : {nutrients.Na}</span>
          <span>포화지방 : {nutrients.fat}</span>
          <span>당류 : {nutrients.sugar}</span>
          <span>단백질 : {nutrients.protein}</span>
          <span>카페인 : {nutrients.Caffeine}</span>
          <h3>선택 내역</h3>
          <span>사이즈 : {view.size}</span>
          <span>우유 종류 : {view.milkType}</span>
          <span>Ice / Hot: {view.drinkType}</span>
        </div>
        <hr />
        <button>결제하기</button>
        <button id="ModalClose" onClick={modalMenu}>
          닫기
        </button>
      </Modal>
    </>
  );
};

export default ItemLayout;
