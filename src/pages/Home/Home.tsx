import React from "react";
import Tag from "../../components/main-tag/Tag";
import MainCard from "../../components/Main-Card/MainCard";
import data from "../../assets/pizza/data";
import { DealCard } from "../../components/Deal-Card/DealCard";
import "./Home.css";

const Home = () => {
  const arr = [data[2], data[3], data[4]];
  return (
    <main>
      <Tag />
      <MainCard />
      <div className="lower-container">
        {arr.map((pizza, index) => (
          <DealCard key={index} pizza={pizza} />
        ))}
      </div>
    </main>
  );
};

export default Home;
