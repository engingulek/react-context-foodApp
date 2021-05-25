
import styled from "styled-components"

const CartItem = (props)=>{
   const marker ="==>"
    return (
        <li style={{listStyle:"none"}} >
        <ProductContainer>
        <ProductName>
     {marker} {props.name}
        </ProductName>
        <ProductPrice>
        {props.price} x 1 = {props.price * 1} 
        </ProductPrice>
        </ProductContainer>
        <RemoveandAdd>
        <Button>
        +
        </Button>
        <Button>
        -
        
        </Button>
        
        </RemoveandAdd>
      
        </li>
    )
}
const ProductName = styled.span`
font-size: 23px;
font-weight: bold;
margin-bottom:10px;`
const ProductPrice = styled.span`
font-size: 18px;
`

const ProductContainer = styled.div`
display: flex;
flex-direction: column;
`
const RemoveandAdd = styled.div`
display: flex;
margin-bottom: 10px;
justify-content: center;

    

`
const Button  = styled.div`
    font-size: 25px;
    margin-left: 10px;
    border:1px solid orange;
    padding: 5px 15px;
    border-radius: 10px;
    cursor: pointer;
    :hover
    {
        background-color: orange;
        color: white;
    }

`



export default CartItem;