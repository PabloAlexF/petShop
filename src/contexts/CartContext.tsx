import { createContext, useEffect, useState, type ReactNode } from "react";
import { type productProps } from "../pages/Products";

interface CartProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  amount: number;
  total: number;
}

interface CartContextData {
  cart: CartProps[];
  addItemCart: (newItem: productProps) => void;
  increaseAmount: (id: number) => void;
  decreaseAmount: (id: number) => void;
  removeItemCart: (id: number) => void;
  clearCart: () => void;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>(() => {
    const storedCart = localStorage.getItem("petshop-cart");

    if (!storedCart) {
      return [];
    }

    try {
      return JSON.parse(storedCart) as CartProps[];
    } catch {
      localStorage.removeItem("petshop-cart");
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("petshop-cart", JSON.stringify(cart));
  }, [cart]);

  function addItemCart(newItem: productProps) {
    setCart((currentCart) => {
      const itemExists = currentCart.find((item) => item.id === newItem.id);

      if (itemExists) {
        return currentCart.map((item) =>
          item.id === newItem.id
            ? {
                ...item,
                amount: item.amount + 1,
                total: item.price * (item.amount + 1),
              }
            : item,
        );
      }

      const newCartItem: CartProps = {
        id: newItem.id,
        name: newItem.title,
        description: newItem.description,
        price: newItem.price,
        image: newItem.cover,
        amount: 1,
        total: newItem.price,
      };

      return [...currentCart, newCartItem];
      
    });
  }

  function increaseAmount(id: number) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              amount: item.amount + 1,
              total: item.price * (item.amount + 1),
            }
          : item,
      ),
    );
  }

  function decreaseAmount(id: number) {
    setCart((currentCart) =>
      currentCart
        .filter((item) => item.id !== id || item.amount > 1)
        .map((item) =>
          item.id === id
            ? {
                ...item,
                amount: item.amount - 1,
                total: item.price * (item.amount - 1),
              }
            : item,
        ),
    );
  }

  function removeItemCart(id: number) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id),
    );
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ cart, addItemCart, increaseAmount, decreaseAmount, removeItemCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
