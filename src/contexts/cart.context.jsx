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

const removeCartitem = (cartItems, cartItemToRemove) => {

    // find item to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    )

    // Check if the quantity of the cartItem to remove is equal to 1 and return a the new cardItems array
    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    //return back cartItems with matching cart item with the reduced quantity
    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id
        ?
            {...cartItem, quantity: cartItem.quantity - 1}
        :   cartItem
    )
}


export const CartContext = createContext({
    isCartOpen: false,
    setCardOpen: () =>{},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {}
})

export const CartProdiver = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItem] = useState([])


    const addItemToCart = (productToAdd) => {
        setCartItem(addCartItem(cartItems, productToAdd))
    }

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItem(removeCartitem(cartItems, cartItemToRemove))
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, cartItems}

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}