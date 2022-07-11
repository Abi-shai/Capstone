import { createContext, useState, useEffect } from "react"
import { getCategoriesAndContainers } from "../utils/firebase/firebase.js"

export const CategoriesContext = createContext({
    categoriesMap: {}
})

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({})

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesMap = await getCategoriesAndContainers()
            setCategoriesMap(categoriesMap)
        }
        getCategoriesMap()
    }, [])

    const value = {categoriesMap}
    return(
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}