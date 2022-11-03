const ItemLayout = ({ name, image }) => {
  return (
    <span className="ItemLayout">
      <img src={image} id="MenuImg" />
      <h3>{name}</h3>
      <div className="ItemAttribute">
        <span>Size</span>
        <span>
          <select>
            <option>Size</option>
            <option>Venti</option>
            <option>Grante</option>
            <option>Tall</option>
          </select>
        </span>
      </div>
      <div className="ItemAttribute">
        <span>Milk</span>
        <select>
          <option>Milk type</option>
          <option>Nomal</option>
          <option>Law Fat</option>
        </select>
      </div>
      <div className="ItemAttribute">
        <span>Drink</span>
        <select>
          <option>Drink type</option>
          <option>Ice</option>
          <option>Hot</option>
        </select>
      </div>
      <button className="BtnBasket">ADD TO BASKET</button>
    </span>
  );
};

export default ItemLayout;
