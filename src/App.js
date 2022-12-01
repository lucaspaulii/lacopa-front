import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import Content from "./Content";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Content />
    </BrowserRouter>
  );
}

export default App;
