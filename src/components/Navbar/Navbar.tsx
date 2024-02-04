import NavButtons from "./NavButtons";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const heading = ["Home", "About", "Menu", "Order Now", "Contact"];

  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <div className="btn-container">
        {heading.map((text, index) => (
          <NavButtons key={index} text={text} />
        ))}
      </div>

      <div className="chat-container">
        <button className="chat-btn">
          <span className="chat">Chat</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
