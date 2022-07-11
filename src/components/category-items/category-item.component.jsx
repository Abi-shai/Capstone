import { useNavigate } from "react-router-dom";

import './category-item.style.scss';

const CategoryItem = ({ category }) => {
    const { imageUrl, title, route } = category

    const navigate = useNavigate();

    const onNavigateHandler = () => {
      navigate(route)
    }

    return(
        <div className="category_container" onClick={onNavigateHandler}>

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

export default CategoryItem;