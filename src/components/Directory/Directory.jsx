import CategoryItem from "../category-items/category-item.component"
import './Directory.scss'

const Directory = ({categories}) => {
    return (
        <div className="categories_container">

            {categories.map((category) => {
            return <CategoryItem id={category.id} category={category} />
            })}
  
      </div>
    )
}

export default Directory