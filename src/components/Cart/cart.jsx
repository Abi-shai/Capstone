import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

import { ItemCount, ShoppingIcon, CartIconContainer } from './cart.style.jsx'


const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext)
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount as="span">{cartItems.length}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon