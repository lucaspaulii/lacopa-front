import { QuantityContainer, QtyContainer, QtyButton, Qty } from "../style/styled.js";
import { useState } from "react";


export default function Quantity(props) {
const {quantity, setQuantity} = props;
const [disabledMinus, setDisabledMinus] = useState(false)

    function handleQty(e) {
        setQuantity(e.target.value)
    }

    return (
        <QuantityContainer>
            <p>Quantidade:</p>
            <QtyContainer>
                <QtyButton disabled={disabledMinus} onClick={() => (quantity <= 1) ? null : setQuantity(quantity-1)}>-</QtyButton>
                <Qty type="number" name="qty" value={quantity} onChange={handleQty}/>
                <QtyButton onClick={() => (quantity >= 0) ? setQuantity(quantity+1) : setQuantity(quantity+1)}>+</QtyButton>
            </QtyContainer>
        </QuantityContainer>
    )}