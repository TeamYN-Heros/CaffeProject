import { useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import "../CSS/Modal.css";

/* eslint-disable jsx-a11y/alt-text */
const ItemLayout = ({ name, image, desc, idx, nutrients }) => {
  const [length, setLength] = useState(10); // 펼치기, 접기 기능
  const [toggle, setToggle] = useState(false); // 펼치기, 접기 기능
  const [modal, setModal] = useState(false); // 모달 창 온오프 기능
  const [view, setView] = useState({}); // 결제 창 상품 정보 불러오기

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
    let size = document.getElementById(idx).querySelector(".size").value;
    let milkType = document
      .getElementById(idx)
      .querySelector(".milkType").value;
    let drinkType = document
      .getElementById(idx)
      .querySelector(".drinkType").value;

    if (size === "xx" || milkType === "xx" || drinkType === "xx") {
      return;
    }
    setView({
      image: document.getElementById(idx).children[0].currentSrc,
      name: document.getElementById(idx).children[1].innerText,
      desc,
      size,
      milkType,
      drinkType,
    });
    setModal(!modal);
  };

  // 모달창 닫기 기능 및 각 상품 선택 메뉴 초기화
  const ModalClose = () => {
    document.getElementById(idx).querySelector(".size").value = "xx";
    document.getElementById(idx).querySelector(".milkType").value = "xx";
    document.getElementById(idx).querySelector(".drinkType").value = "xx";
    setModal(false);
  };

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
          구매하기
        </button>
      </span>
      <Modal isOpen={modal} id="MenuModal">
        <img src={view.image} />
        <h3>{view.name}</h3>
        <hr />
        <p>{view.desc}</p>
        <hr />
        <div className="nutrients">
          <span>
            <h3>제품 영양 정보</h3>
            <div>{nutrients.size}</div>
            <div>1회 제공량 (kcal) : {nutrients.kcal}</div>
            <div>나트륨 (mg) : {nutrients.Na}</div>
            <div>포화지방 : {nutrients.fat}</div>
            <div>당류 : {nutrients.sugar}</div>
            <div>단백질 : {nutrients.protein}</div>
            <div>카페인 : {nutrients.Caffeine}</div>
          </span>
          <span>
            <h3>선택 내역</h3>
            <div>사이즈 : {view.size}</div>
            <div>우유 종류 : {view.milkType}</div>
            <div>Ice / Hot: {view.drinkType}</div>
          </span>
        </div>
        <hr />
        <span>
          <button>담기</button>
          <button>결제하기</button>
          <button id="ModalClose" onClick={ModalClose}>
            닫기
          </button>
        </span>
      </Modal>
    </>
  );
};

export default ItemLayout;
