import "./MenuCard.css";

const MenuCardSides = ({ name, img, price, description, weight, key }: any) => {
  return (
    <div className="Menucard-container">
      <div className="Menucard-image">
        <img src={img} alt={name} />
      </div>
      <div className="Menucard-details">
        <div className="Menucard-text">
          <h3 className="Menucard-title">{name}</h3>
          <p className="Menucard-description">{description}</p>
        </div>
        <div className="Menucard-price">
          <p>${price}</p>
          <p>{weight}</p>
        </div>
        <div className="Menucard-actions">
          <button className="Add-to-Cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default MenuCardSides;
