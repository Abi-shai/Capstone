import { useContext } from "react"
import { ProductsContext } from "../../contexts/product.context"
import ProductCard from "../../components/Products/products"

import './shop.scss'

const Shop = () => {
    const { products } = useContext(ProductsContext)
    return(
        <div className="categories_container">
            {products.map((product) => (

                // spread the ProductCard props
                <ProductCard key={product.id} product={product} />
                
            ))}
        </div>
    )
}

export default Shop