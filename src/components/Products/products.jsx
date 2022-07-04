import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import './products.scss'
import Button, { BUTTON_TYPES_CLASSES } from '../Button/button'

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product
    const { addItemToCart } = useContext(CartContext)

    const addProductToCart = () => {
        addItemToCart(product)
    }

    return (
        <div className='product-card-container'>
            <img className='product-image' src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <div className='content-wrapper'>
                    <div className='credentials-wrapper'>
                        <span className='name'>{name}</span>
                        <span className='price'>${price}</span>
                    </div>
                    <Button buttonType={BUTTON_TYPES_CLASSES.inverted}
                        onClick={addProductToCart}>
                        Add to card
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard