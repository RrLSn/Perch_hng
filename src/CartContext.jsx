// src/CartContext.js
import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(350);

  const expressShipping = 20;
  const subTotal = expressShipping + price;

  return (
    <CartContext.Provider
      value={{
        quantity,
        setQuantity,
        price,
        setPrice,
        subTotal,
        expressShipping,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
