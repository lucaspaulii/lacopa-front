import AuthContext from "./contexts/AuthContext"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Main from "./pages/Main.js";
import Product from "./pages/Product";
import Category from "./pages/Category";
import Header from "./components/Header";
import Login from "./pages/Login"
import Signup from "./pages/Signup";


function App() {
  return (
    <AuthContext.Provider value="">
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Navigate replace to="/main"/>} />
          <Route path="/main" element={<Main />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/categories/:category" element={<Category />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
