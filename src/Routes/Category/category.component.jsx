import { useContext, useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import ProductCard from "../../components/Products/products"

import { CategoriesContext } from "../../contexts/categories.context"

import "./category.style.scss"

const Category = () => {
    const { category } = useParams()
    const { categoriesMap }= useContext(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return(
        <div className="category-container">
            <h1>{category}</h1>

            // && Returns only when the products are ready
            {products &&
                products.map((product) => {
                    return <ProductCard key={product.id} product={product} />
                })
            }
        </div>
    )
}

export default Category