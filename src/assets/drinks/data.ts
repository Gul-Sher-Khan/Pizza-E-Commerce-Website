import mango from "../../assets/drinks/mango.jpg";
import apple from "../../assets/drinks/apple.jpg";
import coke from "../../assets/drinks/coke.jpg";
import lemonade from "../../assets/drinks/lemon.jpg";

const drinks = [
  {
    name: "Mango Juice",
    description: "Refreshing mango juice made from ripe mangoes.",
    price: 2.99,
    ml: 250,
    img: mango, // Provide the actual image URL
  },
  {
    name: "Apple Juice",
    description: "Crisp and natural apple juice, freshly pressed.",
    price: 2.49,
    ml: 200,
    img: apple, // Provide the actual image URL
  },
  {
    name: "Coca-Cola",
    description: "Classic Coca-Cola soda with a hint of sweetness.",
    price: 1.99,
    ml: 330,
    img: coke, // Provide the actual image URL
  },
  {
    name: "Lemonade",
    description: "Zesty lemonade with a perfect balance of sweet and sour.",
    price: 2.29,
    ml: 300,
    img: lemonade, // Provide the actual image URL
  },
];

export default drinks;
