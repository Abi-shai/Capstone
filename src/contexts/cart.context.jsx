import { createContext, useState } from "react"

// Handles the logic for the cart dropdown menu 
const addCartItem = (cartItems, productToAdd) => {
    // Check if cartItems contains the product to add

    /**
     * cartItems.find methods checks for each cartItem if it matches
     * then return the true statement, which refers to the matched
     * cartItem with the same id as the product to add
     */

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    )

    // If found, increment the quantity
    if(existingCartItem) {

        return cartItems.map((cartItem) => cartItem.id === productToAdd.id
            ?
                {...cartItem, quantity: cartItem.quantity + 1}
            :   cartItem
        )

    }

    //return new array with modified items / new items
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}



export const CartContext = createContext({
    isCartOpen: false,
    setCardOpen: () =>{},
    cartItems: [],
    addItemToCart: () => {}
})

export const CartProdiver = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItem] = useState([])


    const addItemToCart = (productToAdd) => {
        setCartItem(addCartItem(cartItems, productToAdd))
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems}

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}