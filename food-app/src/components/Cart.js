import React, { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../store/context";
import CartItem from "./CartItem";
import styled from "styled-components";

const Cart = (props) => {
  const context = useContext(CartContext);


  const cartItem = (
      <ul >
     { context.cartItem.map((item)=>(
        <CartItem 
        key = {item.id}
        id = {item.id}
        name = {item.name}
        description = {item.description}
        price = {item.price}
        amount = {item.amount}
        
        />
      

     ))}
      </ul>
  
  )


const orderHandler = async ()=>{
 await fetch('https://react-http-180ce-default-rtdb.firebaseio.com/orderFood.json',{
   method:"POST",
   body:JSON.stringify({
     orderItems:context.cartItem
   })
 })

 context.clearCart()
}

  return (
   
    <Modal onClose={props.onClose}>
    {cartItem}
    <TotalAmount>
    Total Amount : {context.totalAmount}
    </TotalAmount>
    <ButtonsGroup>
    <CloseButton onClick={props.onClose} >
    Close
    </CloseButton>
    {context.totalAmount!==0 &&  <OrderButton onClick = {orderHandler} >
    Order
    </OrderButton>}
   
    
    </ButtonsGroup>
  
   
    </Modal>
  );
};

const TotalAmount = styled.div`
display:flex;
align-items:center;
justify-content: center;
border-top:4px solid orange;
margin-left: 25px;
padding-top: 20px;
font-size: 24px;
font-weight: bold;
`

const ButtonsGroup = styled.div`
float: right;
margin-top: 10px;



`
const SameButton = styled.button`
padding: 10px 20px;
font-size: 20px;
border-radius: 10px;
border:none;
border: 1px solid orange;
cursor: pointer;

`

const CloseButton = styled(SameButton)`
 margin-right: 20px; 
 background-color: white;
 color:orange;

 
 
 :hover{
     background-color: #e1701a;
     color:white;
 }
`
const OrderButton = styled(SameButton)`
 background-color: orange;
 color:white;

 :hover{
     background-color: #e1701a;
     color:white;
 }

`
export default Cart;
