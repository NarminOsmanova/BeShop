import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Contact from "../Pages/Contact";
import Cart from "../Pages/Cart";
import Wishlist from "../Pages/Wishlist";
import About from "../Pages/About";
import Blogs from "../Pages/Blogs";
import ShopDetails from "../Pages/ShopDetails";
// import NotFoundPage from "../Pages/NotFoundPage";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Registration from "../Pages/Registration";
import Faq from "../Pages/Faq";
import Login from "../Pages/Login";
import Admin from "../Pages/admin/Admin";
import Checkout from "../Pages/Checkout";
import { ProductProvider } from "../context/ProductContext";
import Categories from "../Pages/Categories";
import Dashboard from "../Pages/admin/Dashboard";
import { CartProvider } from "react-use-cart";
import AddBlog from "../Pages/admin/update/AddBlog";
import EditBlog from "../Pages/admin/update/EditBlog";
import BlogDetails from "../Pages/BlogDetails";
import { WishlistProvider } from "react-use-wishlist";
import { ThemeModeContext, ThemeModeProvider } from "../context/ThemeMode";
import { useContext } from "react";
import { LanguageProvider } from "../context/LanguageContext";
import BackToTopButton from "../Pages/BackToTopButton";

const Main = () => {
  const [theme] = useContext(ThemeModeContext);
  return (
    <>
      <LanguageProvider>
        <ProductProvider>
          <Header />
          <div className={theme}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/admin" element={<Admin />}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/dashboard/add" element={<AddBlog />}></Route>
              <Route path="/dashboard/edit/:id" element={<EditBlog />}></Route>
              <Route path="/registration" element={<Registration />}></Route>
              <Route path="/faq" element={<Faq />}></Route>
              <Route path="/blog" element={<Blogs />}></Route>
              <Route path="/blog/:id" element={<BlogDetails />}></Route>
              <Route path="/shop" element={<Shop />}></Route>
              <Route path="/categories" element={<Categories />}></Route>
              <Route path="/shop/checkout" element={<Checkout />}></Route>
              <Route path="/shop/:url" element={<ShopDetails />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/wishlist" element={<Wishlist />}></Route>
              {/* <Route path="/*" element={<NotFoundPage />}></Route> */}
            </Routes>
            <BackToTopButton />
            <Footer />
          </div>
        </ProductProvider>
      </LanguageProvider>
    </>
  );
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ThemeModeProvider>
        <WishlistProvider>
          <CartProvider>
            <Main />
          </CartProvider>
        </WishlistProvider>
      </ThemeModeProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
