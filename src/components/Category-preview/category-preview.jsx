import './category-preview.scss'
import ProductCard from '../Products/products'

const CategoryPreview = ({ title, products }) => {
    return (
        <div className='category-container'>
            <h2>
                <span className='title'>{title.toUpperCase()}</span>
            </h2>
            <div className="preview" >
                {

                    // Filters and keep the first four elements of the index array
                    products
                        .filter((_, idx) => idx < 4)
                        .map((product) =>
                            <ProductCard key={product.id} product={product}/>
                        )
                }
            </div>
        </div>
    )
}

export default CategoryPreview

