import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './containers/App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/user.context'
import { ProductsProvider } from './contexts/product.context'
import { CartProdiver } from './contexts/cart.context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProdiver>
              <App />
          </CartProdiver>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals()
