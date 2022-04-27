import { Routes, Route } from "react-router-dom"
import Navigation from "../components/Navigation/Navigation"
import Home from "../Routes/Home/Home"


const Shop = () => {
  return (
    <div>
      <p>Hellooooooo</p>
    </div>
  )
}

const App = () => {

  return (
    <Routes>

      <Route path="/" element={<Navigation />}>
        <Route
          index
          element={<Home />}
        />
        <Route path="shop" element={<Shop/>}/>
      </Route>
      
    </Routes>
  )

}

export default App
