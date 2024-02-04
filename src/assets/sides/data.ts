import fries from "../sides/fries.jpg";
import mayo from "../sides/mayo.jpg";
import ketchup from "../sides/ketchup.jpg";
import salad from "../sides/salad.jpg";
import bread from "../sides/bread.jpg";

const sides = [
  {
    name: "Fries",
    img: fries, // Provide the actual image URLs
    description: "Crispy golden fries served with seasoning.",
    price: 3.99,
    weight: "150g",
  },
  {
    name: "Mayo Dip",
    img: mayo, // Provide the actual image URLs
    description: "Creamy mayonnaise dip for your favorite sides.",
    price: 1.99,
    weight: "50g",
  },
  {
    name: "Ketchup",
    img: ketchup, // Provide the actual image URLs
    description: "Classic tomato ketchup for your fries.",
    price: 1.49,
    weight: "50g",
  },
  {
    name: "Salad",
    img: salad, // Provide the actual image URLs
    description: "Fresh garden salad with assorted greens.",
    price: 4.99,
    weight: "200g",
  },
  {
    name: "Garlic Bread",
    img: bread, // Provide the actual image URLs
    description: "Warm and buttery garlic breadsticks.",
    price: 2.99,
    weight: "100g",
  },
];

export default sides;
