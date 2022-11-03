import ItemLayout from "./ItemLayout";
import data from "../JSON/ImageURL.json";

// 더미 파일 정보 받아서 아이템레이아웃 프롭스 전달
const ItemList = () => {
  return (
    <>
      <div className="ItemWrap">
        {data.map((menu, index) => {
          return (
            <ItemLayout
              key={index}
              name={menu.Name}
              image={menu.Image}
              desc={menu.Desc}
              idx={index}
              nutrients={menu}
            />
          );
        })}
      </div>
    </>
  );
};

export default ItemList;
