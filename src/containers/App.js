import CategoryItem from '../components/category-items/category-item.component'
import Categories from '../components/CategoriesData/categoriesData'


const App = () => {
  return (
    <div className="categories_container">

      {Categories.map((category) => {
        return <CategoryItem id={category.id} category={category} />
      })}

    </div>
  )
}

export default App
