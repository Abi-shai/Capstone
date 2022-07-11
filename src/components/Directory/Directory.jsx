import Categories from '../../components/CategoriesData/categoriesData'

import CategoryItem from "../category-items/category-item.component"
import './Directory.scss'

const Directory = () => {
    return (
        <div className="categories_container">
            {Categories.map((category) => {
                return <CategoryItem key={category.id} category={category} />
            })}
        </div>
    )
}

export default Directory