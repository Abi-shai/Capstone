import './category-item.style.scss'

const CategoryItem = ({ category }) => {

    const { id, imageUrl, title } = category

    return(
        <div key={id} className="category_container">

            <div className="background_image" style={{
              backgroundImage: `url(${imageUrl})`
            }} />
            <div className="category_info">
              <h2>{title}</h2>
              <p>Shop now</p>
            </div>

        </div>
    )
}

export default CategoryItem