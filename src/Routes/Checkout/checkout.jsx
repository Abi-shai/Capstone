import { useContext } from 'react'
import CheckoutItem from '../../components/Checkout-item/checkout-item'
import { CartContext } from '../../contexts/cart.context'
import './checkout.scss'

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext) 

    return(
        <div className='checkout-container'>
            <div className='checkout-header'>

                <div className='header-block'>
                    <span>Product</span>
                </div>

                <div className='header-block'>
                    <span>Description</span>
                </div>
                    <span>Quantity</span>
                <div className='header-block'>

                </div>

                <div className='header-block'>
                    <span>Price</span>
                </div>

                <div className='header-block'>
                    <span>Remove</span>
                </div>

            </div>
            {
                cartItems.map(cartItem => {
                    return (
                        <CheckoutItem key={cartItem.id} CartItem={cartItem}/>
                    )
                })
            }
            <span className='total'>Total: ${cartTotal}</span>
        </div>
    )
}

export default Checkout