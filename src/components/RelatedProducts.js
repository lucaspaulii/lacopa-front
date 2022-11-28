import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductBox from "./ProductBox.js"


export default function RelatedProducts() {
    const { id } = useParams();
    const [products, setProducts] = useState([])
    const navigate = useNavigate();

    useEffect (() => {
        const URL = `https://lacopa-api.onrender.com/products/${id}/related`;
        const promise = axios.get(URL);

        promise.then(res => {
            setProducts(res.data);
        });

        promise.catch(err => {
            console.log(err.response.data);
        })
    }, [id])

    return (
        <ContainerProducts>
            {products.map((product) =>
            (<ProductBox 
                key={product._id}
                id={product._id}
                amount={product.amount}
                category={product.category}
                description={product.description}
                image={product.image}
                name={product.name}
                value={product.value}
                />
            ))}
        </ContainerProducts>
    )
}

const ContainerProducts = styled.div`
display: flex;
flex-wrap: wrap;
gap: 15px;
align-items: center;
justify-content: center;
margin-bottom: 15px;
`