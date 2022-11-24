import styled from "styled-components";

//Stylying do component <Main>
export const ContainerMain = styled.div`
background-color: #E1E1E1;
width: 100vw;
height: 100%;
overflow-x: hidden
`

export const Logo = styled.img`
width: 100%;
height: 280px;
margin-top: 110px;
`

export const Destaques = styled.div`
width: 100vw;
height: 48px;
background-color: #FFFFFF;
font-family: 'Londrina Solid', cursive;
font-size: 20px;
display: flex;
align-items: center;
padding-left: 13px;
margin-bottom: 15px;
`


//Styling do component <Header>
export const Container = styled.div`
position: fixed;
`

export const HeaderStyle = styled.div`
background-color: #548E19;
width: 100vw;
height: 80px;
font-family: 'Londrina Solid', cursive;
font-size: 20px;
color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
p {
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
}
p:nth-child(2) {
    color: black;
    -webkit-text-stroke-width: 0.2px;
    -webkit-text-stroke-color: #FFFFFF;
}
`

export const ContainerHeader = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
margin: 2px;
`

export const ContainerIcons = styled.div`
display: flex;
`

export const ContainerLogo = styled.div`
display: flex;
`

export const ContainerSearch = styled.div`
width: 220px;
height: 20px;
`

export const Search = styled.input`
font-family: 'Roboto', sans-serif;
width: 100%;
height: 100%;
text-align:center;
border: 0.5px;
border-radius: 5px;
`

export const Menu = styled.div`
background-color: #F6D14B;
width: 100vw;
height: 30px;
display: flex;
align-items: center;
font-family: 'Roboto', sans-serif;
font-size: 10px;
`