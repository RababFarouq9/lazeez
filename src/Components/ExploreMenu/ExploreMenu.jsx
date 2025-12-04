import React from 'react'
import ex from '../ExploreMenu/ExploreMenu.module.css'

const ExploreMenu = ({ category, setCategory }) => {
  const menuItems = [
    { id: 1, name: 'Pizza', apiName: 'pizzas', image: '/images/pizza.jpg' },
    { id: 2, name: 'Burger', apiName: 'burgers', image: '/images/burger.jpg' },
    { id: 3, name: 'Drink', apiName: 'drinks', image: '/images/drink.jpg' },
    { id: 4, name: 'Chicken', apiName: 'chicken', image: '/images/chicken.jpg' },
    { id: 5, name: 'Sandwich', apiName: 'sandwiches', image: '/images/sandwich.jpg' },
    { id: 6, name: 'Desserts', apiName: 'desserts', image: '/images/desert.jpg' },
  ];

  return (
    <div className={ex.exploreMenu} id='exploreMenu'>
      <h2 className={ex.title}>Explore Our Menu 🍽️</h2>
      <p className={ex.text}>
        Choose from a diverse menu featuring a delectable array of dishes.
        Our mission is to satisfy your cravings with fresh and flavorful meals.
      </p>

      <div className={ex.menuGrid}>
        {menuItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setCategory((prev) => (prev === item.apiName ? 'All' : item.apiName))}
            className={`${ex.menuItem} ${category === item.apiName ? ex.active : ''}`}
          >
            <img src={item.image} alt={item.name} className={ex.image} />
            <p className={ex.name}>{item.name}</p>
          </div>
        ))}
      </div>
       <hr />
    </div>
   
  );
};

export default ExploreMenu;

