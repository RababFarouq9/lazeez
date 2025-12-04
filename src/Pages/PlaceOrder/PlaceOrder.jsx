import React, { useContext } from 'react';
import order from '../PlaceOrder/PlaceOrder.module.css';
import { StoreContext } from '../../Context/StoreContext';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  // 🧮 حساب الإجماليات
  const subtotal = getTotalCartAmount ? getTotalCartAmount() : 0;
  const deliveryFee = subtotal > 0 ? 2 : 0;
  const total = subtotal + deliveryFee;

  return (
    <>
      <form action="" className={order.placeOrder}>
        {/* ===== Left Section ===== */}
        <div className={order.placeOrderLeft}>
          <p className={order.title}>Delivery Information</p>

          <div className={order.multiFields}>
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>

          <input type="text" placeholder="Email address" />
          <input type="text" placeholder="Street" />

          <div className={order.multiFields}>
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>

          <div className={order.multiFields}>
            <input type="text" placeholder="Zip code" />
            <input type="text" placeholder="Country" />
          </div>

          <input type="text" placeholder="Phone" />
        </div>

        {/* ===== Right Section ===== */}
        <div className={order.placeOrderRight}>
          <div className={order.cartTotal}>
            <h2>Cart Totals</h2>
            <div>
              <div className={order.cartTotalDetails}>
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <hr />
              <div className={order.cartTotalDetails}>
                <p>Delivery Fee</p>
                <p>${deliveryFee.toFixed(2)}</p>
              </div>
              <hr />
              <div className={order.cartTotalDetails}>
                <b>Total</b>
                <b>${total.toFixed(2)}</b>
              </div>
            </div>
            <button type="button">PROCEED TO PAYMENT</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PlaceOrder;

