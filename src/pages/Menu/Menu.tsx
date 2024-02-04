import React from "react";
import MenuCardDrinks from "../../components/Menu-Card/MenuCardDrinks";
import dirnksData from "../../assets/drinks/data";
import sidesData from "../../assets/sides/data";
import pizzaData from "../../assets/pizza/data";
import MenuCardSides from "../../components/Menu-Card/MenuCardSides";
import MenuCardPizza from "../../components/Menu-Card/MenuCardPizza";
import "./Menu.css";

const Menu = () => {
  const arr = ["pizza", "drinks", "sides"];
  const [menuState, setMenuState] = React.useState("pizza");

  return (
    <main className="menu-page">
      <h1 className="heading">Our Menu</h1>
      <div className="underline-menu"></div>
      <div className="menu-button-contaner">
        {arr.map((item, index) => {
          return (
            <button
              key={index}
              className={`menu-button ${
                menuState === item ? "menu-button-active" : ""
              }`}
              onClick={() => setMenuState(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
      <section className="menu-items">
        {menuState === "drinks" &&
          dirnksData.map((item, index) => {
            return <MenuCardDrinks key={index} {...item} />;
          })}
        {menuState === "sides" &&
          sidesData.map((item, index) => {
            return <MenuCardSides key={index} {...item} />;
          })}
        {menuState === "pizza" &&
          pizzaData.map((item, index) => {
            return <MenuCardPizza key={index} {...item} />;
          })}
      </section>
    </main>
  );
};

export default Menu;
