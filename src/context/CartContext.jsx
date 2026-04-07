import { createContext, useState } from "react";

export const Cart = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );


  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);

    let updatedCart;

    if (exists) {
      updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cartItems, { ...product, quantity: 1 }];
    }

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };


  const removeFromCart = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };


  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };
  const increaseQty = (id) => {
  const updated = cartItems.map((item) =>
    item.id === id
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );

  setCartItems(updated);
  localStorage.setItem("cart", JSON.stringify(updated));
};

const decreaseQty = (id) => {
  let updated = cartItems.map((item) =>
    item.id === id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );

  updated = updated.filter((item) => item.quantity > 0);

  setCartItems(updated);
  localStorage.setItem("cart", JSON.stringify(updated));
};

  return (
    <Cart.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
            increaseQty,  
    decreaseQty,
      }}
    >
      {children}
    </Cart.Provider>
  );
};