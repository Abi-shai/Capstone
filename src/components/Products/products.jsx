import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import './products.scss'
import Button from '../Button/button'

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
                    <Button buttonType='inverted' 
                        onClick={addProductToCart}>
                        Add to card
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard