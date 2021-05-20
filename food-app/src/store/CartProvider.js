import { useReducer } from "react";
import CartContext from "./context";

const defaultCartState = {
  cartItem: [],
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    console.log(action.item);
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCart = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const deneme = {
    FOOD_LIST: [
      {
        id: "m1",
        name: "Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
        img: "https://cdn.yemek.com/mncrop/940/625/uploads/2020/04/sushi-tarifi.jpg",
      },
      {
        id: "m2",
        name: "Schnitzel",
        description: "A german specialty!",
        price: 16.5,
        img: "https://i.pinimg.com/originals/3b/19/0e/3b190e48fa60d1a3ca32b33b0c78b19d.jpg",
      },
      {
        id: "m3",
        name: "Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
        img: "https://i2.wp.com/www.missinthekitchen.com/wp-content/uploads/2019/05/BBQ-Burgers-Recipe-H-Photo-scaled.jpg?resize=720%2C720&ssl=1",
      },
      {
        id: "m4",
        name: "Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
        img: "https://www.guzellikyayinda.com/wp-content/uploads/2017/10/IMG_1338.jpg",
      },
    ],

    addItem: addItemToCart,
  };

  return (
    <CartContext.Provider value={deneme}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
