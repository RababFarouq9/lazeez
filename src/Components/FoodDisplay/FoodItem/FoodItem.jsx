import React, { useContext } from "react";
import fitem from "../FoodItem/FoodItem.module.css";
import { StoreContext } from "../../../Context/StoreContext";

const FoodItem = ({ id, name, dsc, price, img }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  const quantity = cartItems?.[id] || 0;

  return (
    <div className={fitem.foodItem}>
      <div className={fitem.foodItemImgContainer}>
        {/* <img className={fitem.foodItemImg} src={img} alt={name} /> */}
<img
  className={fitem.foodItemImg}
  src={img && img.trim() !== "" ? img : "/images/not2.jpg"}
  alt={img && img.trim() !== "" ? name : "غير متاح الآن"}
/>

        {quantity === 0 ? (
          <img
            className={fitem.add}
            onClick={() => addToCart(id)}
            src="/images/add-n.png"
            alt="add"
          />
        ) : (
          <div className={fitem.foodItemContainer}>
            <img
              className={fitem.minus}
              onClick={() => removeFromCart(id)}
              src="/images/delete.png"
              alt="minus"
            />
            <p>{quantity}</p>
            <img
              className={fitem.adddd}
              onClick={() => addToCart(id)}
              src="/images/add-green.png"
              alt="add more"
            />
          </div>
        )}
      </div>

      <div className={fitem.foodItemInfo}>
        <div className={fitem.foodItemNameRating}>
          <p>{name}</p>
          <img src="/images/start.jpg" alt="rating" />
        </div>
        <p className={fitem.foodItemDesc}>{dsc}</p>
        <p className={fitem.foodItemPrice}>{price}$</p>
      </div>
    </div>
  );
};

export default FoodItem;

