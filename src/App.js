import AuthContext from "./contexts/AuthContext"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Main from "./pages/Main.js";
import Product from "./pages/Product";
import Category from "./pages/Category";
import Header from "./components/Header";


function App() {
  return (
    <AuthContext.Provider value="">
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Navigate replace to="/main"/>} />
          <Route path="/main" element={<Main />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/categories/:category" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
