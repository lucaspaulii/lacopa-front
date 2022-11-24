import { Container, ContainerHeader, ContainerIcons, ContainerLogo, ContainerSearch, HeaderStyle, Search, Menu } from '../style/styled';
import styled from 'styled-components';
import { Icon } from '@iconify/react';


export default function Header() {
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
                        <Search type="text" name="email" placeholder="O que você está procurando?"/>
                    </ContainerSearch>
            </HeaderStyle>
            <Menu>
                <Icon icon="mdi:menu" width="20" />
                Categorias
            </Menu>
        </Container>
    )
}