import ItemLayout from "./ItemLayout";
import data from "../JSON/ImageURL.json";
const ItemList = () => {
  return (
    <>
      <div className="ItemWrap">
        <button>{`<`}</button>
        {data.map((menu, index) => {
          return <ItemLayout key={index} name={menu.Name} image={menu.Image} />;
        })}
        <button>{`>`}</button>
      </div>
    </>
  );
};

export default ItemList;
