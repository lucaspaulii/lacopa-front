import axios from "axios";
import styled from "styled-components";
import Header from "../components/Header";
import HighlightProducts from "../components/HighlightProducts";
import banner from "../assets/image/banner.png";
import { ContainerMain, Destaques, Logo } from "../style/styled";


export default function Main() {
    return (
        <ContainerMain>
            <Header/>
            <Logo src={banner} />
            <Destaques>
                Destaques
            </Destaques>
            <HighlightProducts />
        </ContainerMain>

    )
}