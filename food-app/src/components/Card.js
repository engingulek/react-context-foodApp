import React, { useContext } from "react";
import styled from "styled-components";
import CartContext from "../store/context"


const Card = props => {
  const context = useContext(CartContext)
  
  
  
const addCart = (item)=>{
  context.addItem(item)
}
  return (
     
      <CardContainer>
      <FoodImg src={props.img}/>
      <FoodName> {props.name} </FoodName>
      <FoodDescription>{props.description}</FoodDescription>
      <FoodPrice> {props.price} </FoodPrice>
      <AddCartButton onClick={()=>addCart(props)}  >Add</AddCartButton>
    </CardContainer>
    
    
  );
};



const CardContainer = styled.li`
display: flex;
flex-direction: column;
align-items: center;
border: 2px solid lightgray;
padding: 10px 20px;
border-radius: 10px;

`;

const FoodImg = styled.img`
width: 160px;
height: 140px;
margin-bottom: 20px;

`;

const SameSpan = styled.span`
margin-bottom: 10px;
`
const FoodName = styled(SameSpan)`
font-size: 20px;
font-weight: bold;
`;



const FoodDescription = styled(SameSpan)`
font-size: 18px;


`;
const FoodPrice = styled(SameSpan)`



`;

const AddCartButton = styled.button`
padding: 10px 20px;
font-size:20px;
border:none;
border-radius:20px;
`;

export default Card;
