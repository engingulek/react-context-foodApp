
import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import FoodItem from './components/FoodItem';
import Header from './components/Header';
import CartProvider from './store/CartProvider';


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
    {cartIsShown && <Cart onClose={hideCartHandler} />}
    <Header onShowCart={showCartHandler}/>
    <FoodItem />
    </CartProvider>
  );
}

export default App;
