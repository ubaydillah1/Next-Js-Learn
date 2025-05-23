import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: 1000,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
};

const Toppings = ({
  addTopping,
  pizza,
}: {
  addTopping: (topping: string) => void;
  pizza: { toppings: string[] };
}) => {
  const toppings: string[] = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <motion.div
      className="toppings container"
      variants={containerVariants}
      initial="hidden"
      animate="visible" 
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          const spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              whileHover={{
                scale: 1.3,
                color: "#f8e112",
                originX: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <button>Order</button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
