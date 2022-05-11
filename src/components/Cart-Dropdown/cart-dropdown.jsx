import { useContext } from 'react'
import Button from '../Button/button'
import CartItem from '../Cart-items/cart-item'
import { CartContext } from '../../contexts/cart.context'
import './cart-dropdown.scss'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items' />
            {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
            <Button>Go to checkout</Button>
        </div>
    )
}

export default CartDropdown