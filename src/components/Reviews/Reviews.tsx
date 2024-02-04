import React, { useState, useEffect } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import data from "./data";
import "./Reviews.css";

interface Props {
  id: number;
  name: string;
  image: string;
  title: string;
  quote: string;
}

const Reviews: React.FC = () => {
  const [people, setPeople] = useState<Props[]>(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  return (
    <section className="p7-section">
      <div className="p7-section-center">
        {people.map((person: Props, personIndex) => {
          const { id, image, name, title, quote } = person;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="p7-person-img" />
              <h4>{name}</h4>
              <p className="p7-title-1">{title}</p>
              <p className="p7-text">{quote}</p>
              <FaQuoteRight className="p7-icon" />
            </article>
          );
        })}
        <button className="p7-prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="p7-next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Reviews;
