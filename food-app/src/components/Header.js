import React,{Fragment} from 'react'
import CartButton from './CartButton'
import styled from "styled-components"
const Header = props => {
    return (
        <Fragment>
        <Headers>
        Food App
        <CartButton onClick={props.onShowCart}/>
        </Headers>
        
        </Fragment>
        
    )
}

const Headers = styled.header`
display: flex;
flex-direction: row;
justify-content: space-around;
font-size: 35px;
font-weight: bold;
background-color: orange;
padding-top:15px;
padding-bottom: 15px;
color: white;

`
export default Header
