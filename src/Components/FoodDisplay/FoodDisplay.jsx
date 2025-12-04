import React, { useEffect, useState, useContext } from "react";
import display from "../FoodDisplay/FoodDisplay.module.css";
import FoodItem from "./FoodItem/FoodItem";
import axios from "axios";
import { StoreContext } from "../../Context/StoreContext";

const FoodDisplay = ({ category }) => {
  const [food, setLocalFood] = useState([]);
  const { setFood } = useContext(StoreContext);

  useEffect(() => {
    const getFoods = async () => {
      try {
        const cat =
          category && category !== "All" ? category.toLowerCase() : "burgers";

        const res = await axios.get(
          `https://free-food-menus-api-two.vercel.app/${cat}`
        );
        setLocalFood(res.data);
        setFood(res.data); // ✅ مهم جدًا
      } catch (err) {
        console.log("Error fetching food:", err);
      }
    };

    getFoods();
  }, [category, setFood]);

  return (
    <div className={display.foodDisplay} id="d-display">
      <h2>Top dishes near you</h2>

      <div className={display.foodDisplayList}>
        {Array.isArray(food) && food.length > 0 ? (
          food.map((f, index) => (
            <FoodItem
              key={index}
              id={index}
              name={f.name}
              dsc={f.dsc}
              price={f.price}
              img={f.img}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;


