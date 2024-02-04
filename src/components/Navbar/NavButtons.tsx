import { Link } from "react-router-dom";

const NavButtons = ({ text }: any) => {
  let path;
  if (text === "Home") path = "/";
  else path = `/${text}`;
  return (
    <Link to={path}>
      <button>
        <span className="nav-btn">{text}</span>
      </button>
    </Link>
  );
};

export default NavButtons;
