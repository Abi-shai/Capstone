import { Route, Routes } from 'react-router-dom'

import CategoriesPreview from '../Categories-preview/categories-preview.component'

import './shop.scss'

const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
        </Routes>
    )
}

export default Shop