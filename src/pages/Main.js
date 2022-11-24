import HighlightProducts from "../components/HighlightProducts";
import { ContainerMain, Destaques, Logo } from "../style/styled";


export default function Main() {
    return (
        <ContainerMain>
            <Logo />
            <Destaques>
                Destaques
            </Destaques>
            <HighlightProducts />
        </ContainerMain>

    )
}