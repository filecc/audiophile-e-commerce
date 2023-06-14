'use client'
import { createContext, useState } from 'react';

const CartContext = createContext([
    [], 
    () => {}]);

const CartContextProvider = (props) => {
  const [state, setState] = useState([{
    quantity: 0,
    item: ''
}]);
  return (
    <CartContext.Provider value={[state, setState]}>
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContext, CartContextProvider}