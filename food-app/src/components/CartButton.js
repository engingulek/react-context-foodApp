import React from 'react'
import styled from "styled-components"

const CartButton = props => {
    return (
        <Button onClick={props.onClick}>
        Cart
        </Button>
    )
}
const Button = styled.button`
font-size: 25px;
padding: 10px 60px;
border: none;
border-radius: 99px;
cursor: pointer;

`

export default CartButton
