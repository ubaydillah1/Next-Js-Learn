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

const Order = ({ pizza }: { pizza: { base: string; toppings: string[] } }) => {
  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map((topping) => (
        <div key={topping}>{topping}</div>
      ))}
    </motion.div>
  );
};

export default Order;

// First form of me to better place or maybe somthing like i have to improve my code better than before

// this is try number one after change the settings my recorder
