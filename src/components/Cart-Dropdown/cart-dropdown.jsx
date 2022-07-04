import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Button/button'
import CartItem from '../Cart-items/cart-item'
import { CartContext } from '../../contexts/cart.context'
import { CartDropdownContainer } from './cart-dropdown.style.jsx'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate()

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return(
        <CartDropdownContainer>
            {/* <div className='cart-items' /> */}
            {
                cartItems.length
                    ? (cartItems.map(item => <CartItem key={item.id} cartItem={item} />))
                    : (<p>Your cart is empty!</p>)
            }
            <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown