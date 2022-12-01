import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import ProductBox from "./ProductBox.js";
import { RotatingLines } from "react-loader-spinner";

export default function HighlightProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const highlightProducts = axios.get(`https://lacopa-api.onrender.com/main`);

    highlightProducts.then((res) => {
      setProducts(res.data);
      setIsLoading(false);
    });

    highlightProducts.catch((err) => {
      console.log(err.response.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <ContainerProducts>
      {isLoading && (
        <RotatingLines
          strokeColor="gray"
          strokeWidth="5"
          animationDuration="0.75"
          width="80"
          visible={true}
        />
      )}
      {!isLoading &&
      products.map((product) => (
        <ProductBox
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
  );
}

const ContainerProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;
