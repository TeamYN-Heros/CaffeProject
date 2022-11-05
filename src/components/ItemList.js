import ItemLayout from "./ItemLayout";

// 더미 파일 정보 받아서 아이템레이아웃 프롭스 전달
const ItemList = ({ data }) => {
  return (
    <>
      <div className="ItemWrap">
        {data.map((menu, index) => {
          return (
            <ItemLayout
              // 객체를 재배열 시키기 위해 key 값 필요, 인덱스 항목은 기본 순서값
              key={index}
              name={menu.Name} // 메뉴 이름
              image={menu.Image} // 메뉴 사진
              desc={menu.Desc} // 메뉴 설명
              idx={index} // 결제 및 장바구니와 연동시키기 위한 ID 값
              nutrients={menu} // 영양정보를 꺼내기위해 더미정보 재가공
            />
          );
        })}
      </div>
    </>
  );
};

export default ItemList;
