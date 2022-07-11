import styled from 'styled-components'

export const CartDropdownContainer = styled.div`
    display: grid;
    background-color: white;
    border: 2px solid black;
    justify-items: center;
    align-items: center;
    overflow: scroll;
    width: 300px;
    height: 350px;
    padding: 2em;
    position: absolute;
    top: 80%;
    right: 0;
    z-index: 9;

    p {
        justify-self: center;
    }

    Button {
        height: 50px;
    }
`

// .cart-dropdown-container{
//     display: grid;
//     background-color: white;
//     border: 2px solid black;
//     grid-template-rows: auto;
//     width: 300px;
//     height: 350px;
//     overflow: scroll;
//     padding: 2em;
//     position: absolute;
//     top: 80%;
//     right: 0;
//     z-index: 9;

//     Button {
//         height: 50px;
//     }
// }