import { Icon } from '@iconify/react';
import styled from 'styled-components';
import Quantity from './Quantity';

export default function ShopBox() {




    return (
        <ShopBoxContainer>
            <Quantity />
            <Cart>
                <Icon icon="mdi:cart-plus" width="36" height="36" />
                <p>Adicionar ao carrinho</p>
            </Cart>
        </ShopBoxContainer>
    )
}

const ShopBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: #8B8B8B
`

const Cart = styled.div`
    font-family: "Roboto", sans-sarif;
    font-size: 12px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    height: 80px;
    width: 80px;
    border: 5px ;
    background: #FDFDFD;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
`