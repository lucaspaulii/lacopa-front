import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Destaques } from "../style/styled.js";
import { Icon } from "@iconify/react";
import { RotatingLines } from "react-loader-spinner";
import RelatedProducts from "../components/RelatedProducts.js";
import ShopBox from "../components/ShopBox.js";

export default function Category() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState();
  const [name, setName] = useState();
  const [reduName, setReduName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  let product;

  useEffect(() => {
    const URL = `https://lacopa-api.onrender.com/products/${id}`;
    const promise = axios.get(URL);
    promise.then((res) => {
      product = res.data[0];
      setCategory(product.category);
      setPrice(product.value);
      setDescription(product.description);
      setImage(product.image);
      setName(product.name);
      if (product.name.length >= 20) {
        let sliceName = product.name.slice(0, 20);
        setReduName(sliceName + "...");
      } else {
        setReduName(product.name);
      }
      setLoading(false);
    });
    promise.catch((err) => {
      console.log(err);
    });
  }, [id]);

  return (
    <CategoryContainer>
      <Destaques>
        <p>
          {category} <span>/ {name}</span>
        </p>
      </Destaques>
      <ProductContainer>
        {loading ? (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        ) : (
          <ProductDisplay>
            <Top>
              <Icon
                icon="mdi:cards-heart-outline"
                color="red"
                width="32"
                height="32"
              />
              <Name>
                <p>{reduName}</p>
              </Name>
            </Top>
            <Price>R${price},00</Price>
            <ImageBox>
              <Image src={image} />
              <ShopBox id={id} image={image} name={name} price={price} />
            </ImageBox>
            <Description>
              <p>Descri????o:</p>
              {description}
            </Description>
          </ProductDisplay>
        )}
      </ProductContainer>
      <RelatedContainer>
        <Related>Produtos Relacionados</Related>
        <RelatedProducts />
      </RelatedContainer>
    </CategoryContainer>
  );
}

const CategoryContainer = styled.div`
  width: 100%;
  height: calc(100vh - 110px);
  margin-top: 110px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  align-items: center;
`;

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const ProductDisplay = styled.div`
  background-color: #ffffff;
  height: 400px;
  width: 354px;
  font-family: "Londrina Solid", cursive;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const Top = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 28px;
`;

const Name = styled.div`
  white-space: nowrap;
`;

const Price = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  width: 90%;
  justify-content: right;
  font-size: 20px;
`;

const Description = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;
  font-family: "Roboto", sans-sarif;
  width: 90%;
  font-size: 14px;
  p {
    margin-bottom: 5px;
    color: #8b8b8b;
  }
`;

const Image = styled.img`
  height: 200px;
  max-width: 200px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const ImageBox = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
`;

const Quantity = styled.div`
  font-family: "Roboto", sans-sarif;
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 81px;
  height: 52px;
  background: #fdfdfd;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

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
  border: 5px;
  background: #fdfdfd;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const RelatedContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Related = styled.span`
  font-family: "Londrina Solid", cursive;
  margin-bottom: 15px;
`;
