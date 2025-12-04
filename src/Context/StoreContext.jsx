import React, { createContext, useState } from "react";

export const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [food, setFood] = useState([]); // هتحمليها من API أو تسيبيها فاضية مؤقتًا

  // 🛒 إضافة منتج للكارت
  const addToCart = (id) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  // ❌ حذف منتج من الكارت
  const removeFromCart = (id) => {
    setCartItems((prev) => {
      if (!prev[id]) return prev;
      const newCart = { ...prev };
      newCart[id] = newCart[id] - 1;
      if (newCart[id] <= 0) delete newCart[id];
      return newCart;
    });
  };

  // 💰 حساب الإجمالي
  const getTotalCartAmount = () => {
    let total = 0;
    for (const id in cartItems) {
      const item = food[Number(id)]; // ✅ لأن id = index
      if (item) {
        total += item.price * cartItems[id];
      }
    }
    return total;
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    food,
    setFood, // ✅ هنستخدمها نمرر الأكل من FoodDisplay
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

