import React, { useContext} from 'react'
import Modal from './Modal'
import CartContext from "../store/context"
const Cart = props => {
    const context = useContext(CartContext)
    console.log(context.cartItem)

    
    return (
        <Modal onClose={props.onClose}>
 
        </Modal>
    )
}

export default Cart
