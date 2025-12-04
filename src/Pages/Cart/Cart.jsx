import React, { useContext } from "react";
import ct from "../Cart/Cart.module.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
    const navigate=useNavigate();
  const subtotal = getTotalCartAmount ? getTotalCartAmount() : 0;
  const deliveryFee = subtotal > 0 ? 2 : 0;
  const total = subtotal + deliveryFee;

  if (!food || !Array.isArray(food)) {
    return <p style={{ textAlign: "center" }}>Loading cart...</p>;
  }

  return (
    <div className={ct.cart}>
      <div className={ct.cartItems}>
        <div className={ct.cartItemsTitle}>
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />

        {food.map((item, index) => {
          if (cartItems[index] > 0) {
            return (
              <div key={index} className={ct.cartItemsItem}>
                <img src={item.img} alt={item.name} width="50" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[index]}</p>
                <p>${(item.price * cartItems[index]).toFixed(2)}</p>
                <img
                  src="/images/delete.png"
                  alt="remove"
                  onClick={() => removeFromCart(index)}
                  width="25"
                  style={{ cursor: "pointer" }}
                />
              </div>
            );
          } else return null;
        })}
      </div>

      <div className={ct.cartBottom}>
        <div className={ct.cartTotal}>
          <h2>Cart Totals</h2>
          <div>
            <div className={ct.cartTotalDetails}>
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <hr />
            <div className={ct.cartTotalDetails}>
              <p>Delivery Fee</p>
              <p>${deliveryFee.toFixed(2)}</p>
            </div>
            <hr />
            <div className={ct.cartTotalDetails}>
              <b>Total</b>
              <b>${total.toFixed(2)}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>

        <div className={ct.cartPomocode}>
          <div>
            <p>If you have a promo code, enter it here</p>
            <div className={ct.cartPromocodeInput}>
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;


