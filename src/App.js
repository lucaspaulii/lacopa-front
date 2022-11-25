import AuthContext from "./contexts/AuthContext"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Main from "./pages/Main.js";
import Product from "./components/Product";


function App() {
  return (
    <AuthContext.Provider value="">
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Navigate replace to="/main"/>} />
          <Route path="/main" element={<Main />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
