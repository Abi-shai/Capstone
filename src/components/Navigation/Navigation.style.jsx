import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavigationContainer = styled.nav`
    position: relative;
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 1em 0em;
    align-items: center;
    margin: 0 2em;
`
export const NavLinkContainer = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    align-self: center;
    justify-self: flex-end;
    gap: 1em;
`

export const NavListElementLink = styled(Link)`
    cursor: pointer;
    transition: 750ms cubic-bezier(0.075, 0.82, 0.165, 1);
    text-decoration-line: none;
    color: black;
    opacity: .8;

    
    &:hover{
        opacity: 1;
        transition: opacity 750ms cubic-bezier(0.075, 0.82, 0.165, 1);
    }
`

export const NavListElement = styled.span`
    cursor: pointer;
    transition: 750ms cubic-bezier(0.075, 0.82, 0.165, 1);
    text-decoration-line: none;
    color: black;
    opacity: .8;

    
    &:hover{
        opacity: 1;
        transition: opacity 750ms cubic-bezier(0.075, 0.82, 0.165, 1);
    }
`