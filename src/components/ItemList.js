import ItemLayout from "./ItemLayout";
import data from "../JSON/ImageURL.json";

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
