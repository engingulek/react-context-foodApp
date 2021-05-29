import React, { useContext, useEffect, useState  } from 'react'
import Card from './Card'
import styled from 'styled-components'
import CartContext from "../store/context"


const FoodItem = () => {
const [foodList, setFoodList] = useState([])
  const context = useContext(CartContext)

useEffect(() => {
const fetchFood = async  ()=>{
  
  const response = await fetch('https://react-http-180ce-default-rtdb.firebaseio.com/meals.json')
  if(!response.ok)
  {
    throw new Error ("Something  went wrong")
  }
  const responseData = await response.json()
  console.log(responseData)
  const responseFood = [];
  for (const key in responseData)
  {
    console.log()
    responseFood.push({
      id:key,
      name:responseData[key].name,
      description:responseData[key].description,
      price:responseData[key].price,
      img:responseData[key].img

    })
  }

  console.log(responseFood)
  setFoodList(responseFood)

}

fetchFood().catch((error)=>{
  console.log(error.message)
})
}, [])
  


    const foodLists= foodList.map((food)=>(
        <Card 
        key={food.id}
        id={food.id}
        name={food.name}
        description={food.description}
        img={food.img}
        price = {food.price}
      
        />
    ))
    return <Section >
    {foodLists}
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
