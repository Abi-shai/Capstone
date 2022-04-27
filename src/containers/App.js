import { Routes, Route } from "react-router-dom"
import Navigation from "../components/Navigation/Navigation"
import Home from "../Routes/Home/Home"
import SignIn from "../Routes/SignIn/SignIn"


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
        <Route path="signIn" element={<SignIn />}/>
      </Route>
      
    </Routes>
  )

}

export default App
