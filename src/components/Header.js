import {
  Container,
  ContainerHeader,
  ContainerIcons,
  ContainerLogo,
  ContainerSearch,
  HeaderStyle,
  Search,
  Menu,
} from "../style/styled";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import CategoriesDropDown from "./CategoriesDropDown";
import axios from "axios";

export default function Header() {
  const [isDropDown, setIsDropDown] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const URL = "https://lacopa-api.onrender.com/categories";
    const promise = axios.get(URL);
    promise.then((res) => {
      setCategories(res.data);
    });
    promise.catch((err) => {
      console.log(err.response.data);
    });
  }, []);

  function handleMouseEnter() {
    setIsDropDown(true);
  }
  function toggleDropDown() {
    setIsDropDown(!isDropDown);
  }

  return (
    <Container>
      <HeaderStyle>
        <ContainerHeader>
          <ContainerLogo>
            <p>LaCopa</p>
            <p>store</p>
          </ContainerLogo>
          <ContainerIcons>
            <Icon icon="mdi:heart" width="20" />
            <Icon icon="mdi:cart" width="20" />
            <Icon icon="gg:profile" width="20" />
          </ContainerIcons>
        </ContainerHeader>
        <ContainerSearch>
          <Search
            type="text"
            name="email"
            placeholder="O que você está procurando?"
          />
        </ContainerSearch>
      </HeaderStyle>
      <Menu>
        {isDropDown ? (
          <Icon icon="mdi:menu-open" width="20" onClick={toggleDropDown} style={{color: 'green'}} />
        ) : (
          <Icon
            icon="mdi:menu"
            width="20"
            onMouseEnter={handleMouseEnter}
            onClick={toggleDropDown}
          />
        )}
        {!isDropDown && "Categorias"}
        {isDropDown && (
          <CategoriesDropDown
            setIsDropDown={setIsDropDown}
            categories={categories}
          />
        )}
      </Menu>
    </Container>
  );
}
