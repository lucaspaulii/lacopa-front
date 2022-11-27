import HighlightProducts from "../components/HighlightProducts";
import { ContainerMain, Destaques, Logo } from "../style/styled";
import Header from "../components/Header";


export default function Main() {
    return (
        <ContainerMain>
            <Header />
            <Logo />
            <Destaques>
                Destaques
            </Destaques>
            <HighlightProducts />
        </ContainerMain>

    )
}