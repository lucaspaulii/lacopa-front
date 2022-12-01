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
import { useContext, useEffect, useState } from "react";
import CategoriesDropDown from "./CategoriesDropDown";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { UserInfoContext } from "../contexts/UserContext";

export default function Header() {
  const [isDropDown, setIsDropDown] = useState(false);
  const [categories, setCategories] = useState([]);
  const [prevLocation, setPrevLocation] = useState([]);
  const { userToken } = useContext(AuthContext);
  const { setUserInfo } = useContext(UserInfoContext);
  const [inputValue, setInputValue] = useState(undefined);
  const navigate = useNavigate();
  const location = useLocation();

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

  useEffect(() => {
    if (prevLocation !== location) {
      setIsDropDown(false);
    }
  });

  function handleMouseEnter() {
    setIsDropDown(true);
  }
  function toggleDropDown() {
    setIsDropDown(!isDropDown);
    setPrevLocation(location);
  }

  useEffect(() => {
    if (userToken) {
      const URL = "https://lacopa-api.onrender.com/user";
      const config = {
        headers: { Authorization: `Bearer ${userToken}` },
      };
      const promise = axios.get(URL, config);
      promise.then((res) => {
        setUserInfo(res.data);
      });
      promise.catch((err) => {
        console.log(err);
      });
    }
  }, []);

  return (
    <Container>
      <HeaderStyle>
        <ContainerHeader>
          <ContainerLogo onClick={() => navigate("/main")}>
            <p>LaCopa</p>
            <p>store</p>
          </ContainerLogo>
          <ContainerIcons>
            <Icon icon="mdi:heart" width="20" />
            <Link to={userToken ? "/cart" : "/signin"}>
              <Icon icon="mdi:cart" width="20" />
            </Link>
            <Link to={userToken ? "/userinfo" : "/signin"}>
              <Icon icon="gg:profile" width="20" />
            </Link>
          </ContainerIcons>
        </ContainerHeader>
        <ContainerSearch>
          <Search
            type="text"
            name="email"
            placeholder="O que você está procurando?"
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                navigate(`/search/${inputValue}`);
              }
            }}
          />
          <Link
            to={inputValue ? `/search/${inputValue}` : "#"}
            style={{ color: "#ffffff" }}
          >
            <Icon icon="ic:baseline-search" width="25" />
          </Link>
        </ContainerSearch>
      </HeaderStyle>
      <Menu>
        {isDropDown ? (
          <Icon
            icon="mdi:menu-open"
            width="20"
            onClick={toggleDropDown}
            style={{ color: "green" }}
          />
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
