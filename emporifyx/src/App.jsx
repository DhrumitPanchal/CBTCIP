import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import MyContext from "./Context/Context";
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const LoginPage = lazy(() => import("./Pages/LoginPage"));
const RegisterPage = lazy(() => import("./Pages/RegisterPage"));
const HomePage = lazy(() => import("./Pages/HomePage"));
const ProductsPage = lazy(() => import("./Pages/ProductPage"));
const LikedProductPage = lazy(() => import("./Pages/LikedProductsPage"));
const CartPage = lazy(() => import("./Pages/CartPage"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <MyContext>
            <Toaster />
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/Likedproducts" element={<LikedProductPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
            <Footer />
          </MyContext>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
