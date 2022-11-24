import Header from "../components/Header";
import HighlightProducts from "../components/HighlightProducts";
import { ContainerMain, Destaques, Logo } from "../style/styled";


export default function Main() {
    return (
        <ContainerMain>
            <Header/>
            <Logo />
            <Destaques>
                Destaques
            </Destaques>
            <HighlightProducts />
        </ContainerMain>

    )
}