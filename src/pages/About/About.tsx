import React from "react";
import Reviews from "../../components/Reviews/Reviews";
import bg from "../../assets/background.jpg";
import "./About.css";
import { MdOutlineFastfood, MdOutlineFoodBank } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const About = () => {
  return (
    <main className="main">
      <section className="about-section">
        <div className="image-container">
          <img src={bg} alt="Pizza" className="image" />
        </div>
        <div className="content">
          <div className="textContainer">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              officiis labore iure molestiae incidunt, asperiores ea, tenetur
              corrupti voluptatem nostrum laudantium placeat odio, velit
              obcaecati fugiat dolor et maiores repellendus. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Sed totam obcaecati
              deserunt fugiat in ullam ex possimus officiis, dolorem blanditiis
              quibusdam, vitae dolor dolores, neque itaque dignissimos rem
              voluptate labore.
            </p>
          </div>
          <div className="line"></div>
          <div className="cards-container">
            <div className="card">
              <div className="iconContainer">
                <MdOutlineFastfood />
              </div>
              <div className="infoContainer">
                <h3>Order Your Food</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus, voluptatum.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="iconContainer">
                <TbTruckDelivery />
              </div>
              <div className="infoContainer">
                <h3>Delivery or Pick Up</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus, voluptatum.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="iconContainer">
                <MdOutlineFoodBank />
              </div>
              <div className="infoContainer">
                <h3>Delicious Recipes</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus, voluptatum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Reviews />
    </main>
  );
};

export default About;
