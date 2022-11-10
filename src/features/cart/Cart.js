import React from "react";
import Header from "../../components/Header";
import "../../CSS/cartItemList.css";
import "../../CSS/cart.css";
// import { useSelector, useDispatch } from "react-redux";
import { addToFavorites } from "./cartSlice";

const Cart = () => {
  // const carts = useSelector((state) => state.cart.favorites);
  // const dispatch = useDispatch();
  // console.log(carts);
  let carts = [];

  for (let i = 0; i < 101; i++) {
    if (JSON.parse(localStorage.getItem("cart" + i)) !== null) {
      carts.push(JSON.parse(localStorage.getItem("cart" + i)));
    }
  }
  return (
    <>
      <Header />
      <div className="shoppingCartBox">
        <div className="cartBoxs">
          <div className="cartBox">
            <div className="cartBoxName">장바구니</div>
            <div className="allCartCheck">
              {/* <CartAll/> */}
              <input type={"checkbox"} className="allCartCheck-start" />
              <div className="allCartCheck-center">전체선택</div>
              <div className="allCartCheck-end">선택삭제</div>
            </div>
            {carts.map((cart, idx) => (
              <>
                {cart.accessToken === sessionStorage.getItem("accessToken") ? (
                  <div className="cartBoxItem" key={idx}>
                    <input type={"checkbox"} className="cartBoxItme-1" />
                    <div className="cartBoxItem-2">
                      <img src={cart.mImage} alt="img" />
                    </div>
                    <div className="cartBoxItem-3">{cart.mName}</div>
                    <div className="cartBoxItem-4">
                      <div className="cartBoxItem-4-Box">
                        <button className="cartBoxItem-4-Box-1">-</button>
                        <div className="cartBoxItem-4-Box-2">
                          {cart.mAmount}
                        </div>
                        <button className="cartBoxItem-4-Box-3">+</button>
                      </div>
                    </div>
                    <div className="cartBoxItem-5">{cart.price}원</div>
                  </div>
                ) : null}
              </>
            ))}
            <div className="cartButtons">
              <button className="cartButton-select">선택상품 주문</button>
              <button className="cartButton-all">전체상품 주문</button>
            </div>
          </div>
        </div>
        <div className="payBoxs">
          <div className="payBox">
            <div className="payPrices">
              <div className="payPrice">
                <span>상품금액</span>
                <span>+0원</span>
              </div>
              <div className="payPrice">
                <span>할인금액</span>
                <span className="minusPrice">-0원</span>
              </div>
              <div className="payPrice">
                <span>배송비</span>
                <span>+0원</span>
              </div>
            </div>
            <div className="allPayPrice">
              <span>결제 예상 금액</span>
              <span>0원</span>
            </div>
            <div className="orderButtons">
              <button className="orderButton">원 주문하기</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
