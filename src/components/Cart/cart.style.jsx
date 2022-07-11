import styled from "styled-components";

import { ReactComponent as ShoppingSvg } from '../../assets/shopping-bag.svg';

export const ShoppingIcon = styled(ShoppingSvg)`
    width: 25px;
    height: 25px;
`

export const CartIconContainer = styled.div`
    position: relative;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    cursor: pointer;
`

export const ItemCount = styled.span`
    position: absolute;
    transform: translateX(8px) translateY(2px);
`