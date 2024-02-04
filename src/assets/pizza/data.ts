import veggie from "../pizza/veggie.png";
import bbq from "../pizza/bbq.png";
import malaiboti from "../pizza/malai.png";
import pineapple from "../pizza/pineapple.png";
import italian from "../pizza/italian.png";
import sausage from "../pizza/sausage.png";
import cheese from "../pizza/cheese.png";
import margherita from "../pizza/margherita.png";
import oliveonion from "../pizza/olives.png";
import bacon from "../pizza/bacon.png";

const pizzaItems = [
  {
    name: "Veggie Delight",
    description:
      "A medley of broccoli, bell peppers, and cherry tomatoes on a whole wheat crust.",
    text: "Our Veggie Delight pizza is a healthy and flavorful choice for those seeking a burst of freshness in every bite. The colorful medley of vegetables is perfectly complemented by our signature crispy crust, making it an excellent option for health-conscious pizza lovers.",
    img: veggie,
    calories: 300,
    cheeseType: "Mozzarella",
    weight: "300g",
    price: 12.99,
  },
  {
    name: "BBQ Bliss",
    description: "Savory BBQ sauce, tender chicken, and red onions.",
    text: "Prepare your taste buds for a journey of smoky and tangy flavors with our BBQ Bliss pizza. The succulent chicken, smothered in our signature BBQ sauce, pairs harmoniously with the sweetness of red onions. It's a true delight for BBQ enthusiasts who crave that perfect balance of savory and sweet.",
    img: bbq,
    calories: 350,
    cheeseType: "Cheddar",
    weight: "320g",
    price: 14.99,
  },
  {
    name: "Malai Boti Delight",
    description: "Tender chunks of marinated chicken in a creamy sauce.",
    text: "Experience the rich and aromatic flavors of India with our Malai Boti Delight pizza. Tender pieces of marinated chicken are lovingly cooked in a creamy malai sauce, creating a delightful fusion of spices and creaminess. This pizza is a must-try for those seeking a taste of authentic Indian cuisine.",
    img: malaiboti,
    calories: 380,
    cheeseType: "Paneer",
    weight: "310g",
    price: 15.99,
  },
  {
    name: "Pineapple Paradise",
    description: "Sweet and tangy pineapple with ham and mozzarella.",
    text: "Get ready for a flavor explosion in every bite with our Pineapple Paradise pizza. The sweetness of ripe pineapple harmoniously blends with the savory ham and creamy mozzarella, creating a tropical paradise on your taste buds. It's the perfect choice for those looking to indulge in a unique and delightful pizza experience.",
    img: pineapple,
    calories: 320,
    cheeseType: "Mozzarella",
    weight: "290g",
    price: 13.99,
  },
  {
    name: "Italian Masterpiece",
    description: "Classic Italian flavors with tomatoes, basil, and Parmesan.",
    text: "Indulge in the timeless elegance of Italy with our Italian Masterpiece pizza. Ripe tomatoes, fragrant basil, and aged Parmesan cheese come together on our traditional thin crust to create a culinary masterpiece that captures the essence of Italy's rich culinary heritage.",
    img: italian,
    calories: 330,
    cheeseType: "Parmesan",
    weight: "300g",
    price: 14.49,
  },
  {
    name: "Sausage Sensation",
    description: "Spicy sausage, green peppers, and onions.",
    text: "Are you ready for a bold and flavorful adventure? Our Sausage Sensation pizza features spicy Italian sausage, sautéed green peppers, and caramelized onions on a hand-stretched dough with a touch of olive oil. It's the perfect choice for those who crave a hint of heat and a burst of savory goodness in every bite.",
    img: sausage,
    calories: 360,
    cheeseType: "Mozzarella",
    weight: "310g",
    price: 14.99,
  },
  {
    name: "Cheese Lover's Dream",
    description: "A cheese extravaganza with four types of cheese.",
    text: "Calling all cheese lovers! Our Cheese Lover's Dream pizza is a heavenly creation featuring a melange of Mozzarella, Cheddar, Gouda, and Swiss cheeses melted to perfection on a thick and fluffy crust. Dive into a world of melted cheesy goodness that will satisfy your cheese cravings.",
    img: cheese,
    calories: 390,
    cheeseType: "Mozzarella, Cheddar, Gouda, Swiss",
    weight: "320g",
    price: 15.99,
  },
  {
    name: "Margherita Magic",
    description: "The classic Margherita with tomatoes, basil, and mozzarella.",
    text: "Experience the simple elegance of Italy with our Margherita Magic pizza. Ripe tomatoes, fresh basil leaves, and creamy Mozzarella cheese come together on a thin and crispy base, creating a timeless classic that captures the essence of Italian cuisine. Each bite is a journey through Italy's culinary heritage.",
    img: margherita,
    calories: 310,
    cheeseType: "Mozzarella",
    weight: "300g",
    price: 13.99,
  },
  {
    name: "Olive Onion Extravaganza",
    description:
      "A combination of Kalamata olives, caramelized onions, and Feta cheese on a fluffy crust.",
    text: "Embark on a Mediterranean adventure with our Olive Onion Extravaganza pizza. This unique creation features the bold flavors of Kalamata olives, caramelized onions, and crumbled Feta cheese on a fluffy crust. Each bite is a tantalizing taste of the Mediterranean region.",
    img: oliveonion,
    calories: 340,
    cheeseType: "Feta",
    weight: "310g",
    price: 14.49,
  },
  {
    name: "Bacon Bonanza",
    description:
      "Crispy bacon, sautéed mushrooms, and Mozzarella cheese on a hand-tossed dough.",
    text: "Indulge in savory satisfaction with our Bacon Bonanza pizza. Experience the irresistible crunch of perfectly crispy bacon, the earthy richness of sautéed mushrooms, and the gooey goodness of Mozzarella cheese, all combined on a hand-tossed dough that's lovingly brushed with a hint of garlic butter. This pizza is the ultimate comfort food and a true symphony of flavors that will leave your taste buds craving for more.",
    img: bacon,
    calories: 370,
    cheeseType: "Mozzarella",
    weight: "320g",
    price: 15.49,
  },
];

// You can access each pizza item like this: pizzaItems[0], pizzaItems[1], etc.

export default pizzaItems;
