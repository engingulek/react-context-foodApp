import { useReducer } from "react";
import CartContext from "./context";

const defaultCartState = {
  cartItem: [],
  totalAmount:0
  
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateTotalAmount = state.totalAmount + action.item.price*action.item.amount
    
    const existingCartItemIndex = state.cartItem.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.cartItem[existingCartItemIndex];
    let updatedItems;
    if(existingCartItem)
    {
      const updateItem = {
        ...existingCartItem,
        amount:existingCartItem.amount+1
       
      }
      updatedItems = [...state.cartItem];
      updatedItems[existingCartItemIndex]=updateItem;
    }else{
      
      updatedItems = state.cartItem.concat(action.item);
    
    }
    
    

    return {
      cartItem: updatedItems,
      totalAmount:updateTotalAmount
    };
  }
  if(action.type ==="REMOVE")
  {
    const existingCartItemIndex = state.cartItem.findIndex((item)=>item.id===action.id) 

    const existingCartItem = state.cartItem[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount -existingCartItem.price
    let updatedItems;
    
    if(existingCartItem.amount===1)
    {
      updatedItems= state.cartItem.filter((item)=>item.id!==action.id)
    }else{
      const updateItem = {
        ...existingCartItem,
        amount:existingCartItem.amount-1
      }
      updatedItems =[...state.cartItem]
      updatedItems[existingCartItemIndex]=updateItem
    }
    return {
      cartItem:updatedItems,
      totalAmount:updatedTotalAmount
    }
  }
  if(action.type==="CLEAR")
  {
    return defaultCartState
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

  const removeItemFromCart = (id)=>{

  dispatchCartAction({type:"REMOVE",id:id})
  }

  const clearCart = ()=>{
    dispatchCartAction({type:"CLEAR"})
  }

  const deneme = {
   
    addItem: addItemToCart,
    removeItem:removeItemFromCart,
    cartItem: cartState.cartItem,
    totalAmount:cartState.totalAmount,
    clearCart:clearCart,
   
  };

  return (
    <CartContext.Provider value={deneme}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
