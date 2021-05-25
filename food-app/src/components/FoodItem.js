import React, { useContext } from 'react'
import Card from './Card'
import styled from 'styled-components'
import CartContext from "../store/context"

const FoodItem = () => {
  const context = useContext(CartContext)
  


    const foodList= context.FOOD_LIST.map((food)=>(
        <Card 
        key={food.id}
        id={food.id}
        name={food.name}
        description={food.description}
        img={food.img}
        price = {food.price}
        qunatity= {food.quantity}
        />
    ))
    return <Section >
    {foodList}
    </Section>
   
        
    
}
const Section = styled.section`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
margin-top: 50px;


`


export default FoodItem
