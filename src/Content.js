import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Main from "./pages/Main";
import SearchBar from "./pages/SearchBar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserInfoPage from "./pages/UserInfoPage";
import Product from "./pages/Product";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn, fadeOut } from "./style/keyframes";

export default function Content() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <TransitionStageContainer
      animation={transitionStage}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransistionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<Navigate replace to="/main" />} />
        <Route path="/main" element={<Main />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/categories/:category" element={<Category />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userinfo" element={<UserInfoPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search/:searchInput" element={<SearchBar />} />
      </Routes>
    </TransitionStageContainer>
  );
}

const TransitionStageContainer = styled.div`
  animation-name: ${(props) =>
    props.animation === "fadeIn"
      ? fadeIn
      : props.animation === "fadeOut"
      ? fadeOut
      : ""};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
`;


