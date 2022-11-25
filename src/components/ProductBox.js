import { Link } from "react-router-dom";
import styled from "styled-components";

export default function HighlightProducts(props) {
    const {id, amount, category, description, image, name, value} = props

    return (
        <Link to={`/products/${id}`} style={{ textDecoration: 'none' }} >
            <ProductContainer>
                <ProductImage src={image} />
                <p>{name}</p>
                <p>R${value},00</p>
            </ProductContainer>
        </Link>
    )
}

const ProductContainer = styled.div`
font-family: 'Londrina Solid', cursive;
height: 130px;
width: 100px;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
font-size: 12px;
font-weight: 100;
text-align: center;
color: black;
border-radius: 5px;
filter: drop-shadow(0px 1px 2px #000);
p:nth-child(3) {
    font-size: 8px;
}
`

const ProductImage = styled.img`
max-height: 70px;

`