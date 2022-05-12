import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import './checkout.scss'

const Checkout = () => {
    const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext) 

    return(
        <div>
            <h1>Checkout Page</h1>
            {
                cartItems.map((cartItem) => {
                    const { id, name, quantity } = cartItem
                    return (
                        <div key={id}>
                            <h2>{name}</h2>
                            <span>{quantity}</span>
                            <br />
                            <span onClick={() => removeItemFromCart(cartItem)}>decrement</span>
                            <br />
                            <span onClick={() => addItemToCart(cartItem)}>increment</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Checkout