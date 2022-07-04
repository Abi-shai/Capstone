import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext } from 'react'
import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'
import { signOutUser } from '../../utils/firebase/firebase'
import CartIcon from '../Cart/cart'
import CartDropdown from '../Cart-Dropdown/cart-dropdown'
// Importing the svg logo as a component
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'


import {
    NavigationContainer,
    NavLinkContainer,
    NavListElement,
    NavListElementLink
} from './Navigation.style.jsx'

const Navigation = () => {

    // Getting out checking the value of the currentUser logged in
    const { currentUser } = useContext(UserContext)

    
    const { isCartOpen } = useContext(CartContext)


    // Using link anchor tag for the router additionnal functionnalities
    return (
        <Fragment>
            <NavigationContainer as="nav">
                <Link to="/">
                    <CrownLogo />
                </Link>
                <NavLinkContainer as="ul">
                    <NavListElementLink as="li" to="/">Home</NavListElementLink>
                    {
                        currentUser
                        ? (<NavListElement as="li" onClick={signOutUser}>Sign out</NavListElement>)
                        : (<NavListElementLink as="li" to="/auth">Sign in </NavListElementLink>)
                    }
                    <NavListElementLink as="li" to="/shop">Shop</NavListElementLink>
                    {/* <Link className='nav_list_element' to="/sneakers">Sneakers</Link> */}
                    <CartIcon />
                </NavLinkContainer>
                {/* when the cart is open then return the cartDropdown component */}
                {isCartOpen && <CartDropdown/>}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )

}

export default Navigation