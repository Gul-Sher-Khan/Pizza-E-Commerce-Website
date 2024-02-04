import "./DealCard.css";

export const DealCard = ({ pizza }: any) => {
  return (
    <div className="deal-card">
      <div className="dealInfo">
        <h3>{pizza.name}</h3>
        <p>{pizza.description}</p>
        <h4>${pizza.price}</h4>
      </div>
      <div className="deal-imgContainer">
        <img className="delImg" src={pizza.img} alt="pizza" />
      </div>
    </div>
  );
};
