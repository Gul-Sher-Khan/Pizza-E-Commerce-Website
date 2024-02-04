import React, { useState } from "react";
import "./MainCard.css";
import data from "../../assets/pizza/data";
import { LiaCheeseSolid } from "react-icons/lia";
import { BsFire } from "react-icons/bs";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface PizzaProps {
  name: string;
  description: string;
  text: string;
  img: string;
  calories: number;
  cheeseType: string;
  weight: string;
  price: number;
}

const MainCard = () => {
  const articles: PizzaProps[] = [data[1], data[0], data[8]];
  const [index, setIndex] = useState(0);
  const changeIndex = () => {
    if (index === articles.length - 1) {
      setIndex(0);
    } else setIndex(index + 1);
  };
  //auto change of index
  React.useEffect(() => {
    const interval = setInterval(() => {
      changeIndex();
    }, 7000);
    return () => clearInterval(interval);
  }, [index]);
  return (
    <div className="All">
      <button className="btn1" onClick={changeIndex}>
        <AiFillCaretLeft />
      </button>

      <div className="container">
        <div className="inner-container">
          <div className="text-container">
            <h1>{articles[index].name}</h1>
            <h3>{articles[index].description}</h3>
            <p>{articles[index].text}</p>
          </div>
          <div className="icon-container">
            <div className="icon-item">
              <BsFire />
              <div className="icon-details">
                <span className="bold-text">{articles[index].calories}</span>
                <span className="grey-text">Calories</span>
              </div>
            </div>
            <div className="icon-item">
              <LiaCheeseSolid />
              <div className="icon-details">
                <span className="bold-text">{articles[index].weight}</span>
                <span className="grey-text">{articles[index].cheeseType}</span>
              </div>
            </div>
          </div>
          <div className="finance">
            <button className="btn">
              <span className="icon">
                <AiOutlineShoppingCart />
              </span>
              <span className="text">Order Now</span>
            </button>
            <div className="price">
              <span className="price-bold">
                ${articles[index].price.toFixed(2).split(".")[0]}
              </span>
              <span className="price-decimal">
                .{articles[index].price.toFixed(2).split(".")[1]}
              </span>
            </div>
          </div>
        </div>
        <div className="img-container">
          <img src={articles[index].img} alt="pizza" />
        </div>
      </div>
      <button className="btn1">
        <AiFillCaretRight onClick={changeIndex} />
      </button>
    </div>
  );
};

export default MainCard;
