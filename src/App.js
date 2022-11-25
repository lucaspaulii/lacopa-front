import AuthContext from "./contexts/AuthContext"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Main from "./pages/Main.js";
import Product from "./components/Product";
import Category from "./pages/Category";
import Header from "./components/Header";


function App() {
  return (
    <AuthContext.Provider value="">
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/categories/:category" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
