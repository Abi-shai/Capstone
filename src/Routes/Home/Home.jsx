// import { Outlet } from 'react-router-dom'
import Directory from '../../components/Directory/Directory'
import Categories from '../../components/CategoriesData/categoriesData'
// import Navigation from '../../components/Navigation/Navigation'

const Home = () => {
    return (
        <div>
            {/* <Outlet/> */}
            <Directory categories={Categories} />
        </div>
    )
}

export default Home
