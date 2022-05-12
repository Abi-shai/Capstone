import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import './checkout-item.scss'

const CheckoutItem = ({CartItem}) => {
    const {
        name,
        imageUrl,
        price,
        quantity
    } = CartItem

    const {
        clearItemFromCart,
        addItemToCart,
        removeItemFromCart
    } = useContext(CartContext)


    const clearItemFromCartHandler = () => clearItemFromCart(CartItem)
    const addItemHandler = () => { addItemToCart(CartItem) }
    const removeItemHandler = () => { removeItemFromCart(CartItem) }

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div onClick={removeItemHandler} className='arrow'>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div onClick={addItemHandler} className='arrow'>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div onClick={clearItemFromCartHandler} className='remove-button'>&#10005;</div>
        </div>
    )
}

export default CheckoutItem