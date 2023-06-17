import React, { useContext, useState } from "react";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { Rating } from "@mui/material";
import { useCart } from "react-use-cart";
import ReactImageMagnify from 'react-image-magnify';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useWishlist } from "react-use-wishlist";
import { LinkContainer } from "react-router-bootstrap";
import { Helmet } from "react-helmet";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/homelang";

type LanguageKey = keyof typeof translations;

const ShopDetails: React.FC = (props) => {

  const { language } = useContext(LanguageContext);
  const t = translations[language as LanguageKey];

  const [product] = useContext(ProductContext)
  const { url } = useParams();
  const productdetails = product.find((p: any) => p.id === url);
  const [counter, setCounter] = useState(1);

  const { addWishlistItem } = useWishlist();
  const { addItem } = useCart();
  const notify = (message: any) =>
    toast.success("👌 Product has been add to your cart", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const notify2 = (message: any) =>
    toast('👌 Product has been add to your wishlist!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  // rating ucun
  const [value, setValue] = useState(0);

  // desc ve review butonlari ucun
  const [showReview, setShowReview] = useState(true);

  function handleReviewClick() {
    setShowReview(true);
  }
  function handleDescriptionClick() {
    setShowReview(false);
  }

  const reviewClassName = showReview ? 'active' : '';
  const descriptionClassName = showReview ? '' : 'active';

  // product slideri ucun 
  const filteredProduct = product.filter((p: any) => p.category === productdetails.category);
  const productWithoutDetails = product.filter((p: any) => p.id !== productdetails.id);

  const settings = {
    customPaging: function (i: any) {
      return (
        <a href="/" key={i}>
          <img src={filteredProduct[i].img} alt="product" />
        </a>

      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section className="shop-details">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Product</title>
      </Helmet>
      <div className="section-block">
        <div className="section-content">
          <h1 className="animate__zoomInDown animate__animated">{t.shop}</h1>
          <ul className="section-content__ul">
            <li className="section-content__item">
              <LinkContainer to={"/"}>
                <a href="/" className="me-5">
                  {t.home}
                </a>
              </LinkContainer>
              <i className="fa-solid fa-arrow-right"></i>
            </li>
            <li className="section-content__item">
              <LinkContainer to={"/shop"}>
                <a href="/shop" className="me-5">
                  {t.shop}
                </a>
              </LinkContainer>
              <i className="fa-solid fa-arrow-right"></i>
            </li>
            <li className="section-content__item">{t.product}</li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <Slider {...settings}>
              <div key={productdetails.id}>
                <ReactImageMagnify
                  smallImage={{
                    alt: productdetails.title,
                    isFluidWidth: true,
                    src: productdetails.img,
                    srcSet: `${productdetails.img} 768w, ${productdetails.img} 1280w, ${productdetails.img} 1920w`,
                  }}
                  largeImage={{
                    src: productdetails.img,
                    width: 1200,
                    height: 1800,
                  }}
                  enlargedImagePosition="over"
                />
              </div>
              {productWithoutDetails
                .filter((p: any) => p.category === productdetails.category)
                .map((p: any) => (
                  <div key={p.id}>
                    <ReactImageMagnify
                      smallImage={{
                        alt: p.title,
                        isFluidWidth: true,
                        src: p.img,
                        srcSet: `${p.img} 768w, ${p.img} 1280w, ${p.img} 1920w`,
                      }}
                      largeImage={{
                        src: p.img,
                        width: 1200,
                        height: 1800,
                      }}
                      enlargedImagePosition="over"
                    />
                  </div>
                ))}
            </Slider>
          </div>
          <div className="col-12 col-md-5">
            <h3>{language === "EN" ? productdetails.title : productdetails.titleAz}</h3>
            <p className="product-stock" style={{ color: productdetails.status ? "##12a33b" : "red", fontWeight: productdetails.status ? "bold" : "normal" }}>{productdetails.status === true ? t.stock : t.outstock}</p>
            <p className="product-price">$ {productdetails.price}</p>
            <p>{language === "EN" ? productdetails.description : productdetails.descAz}</p>
            <div className="contact-info__social">
              <span>{t.find}:</span>
              <ul>
                <li>
                  <a href="https://az-az.facebook.com/">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="product-quantity">
              <p className="product-quantity__title">
                {t.quantity}:
              </p>
              <input type="button" value="-" className="minus" onClick={() => {
                if (counter > 0) {
                  setCounter(counter - 1)
                }
              }} />
              <input type="text" value={counter} />
              <input type="button" value="+" className="plus" onClick={() => {
                setCounter(counter + 1)
              }} />
            </div>
            <div className="product-buttons">
              {productdetails.status ? <>
                <button className="btn btn-cart" onClick={() => {
                  const message = addItem(productdetails, counter);
                  notify(message);
                }}>
                  <i className="fa-solid fa-cart-plus me-3"></i> {t.cart}
                </button>
                <ToastContainer
                  position="bottom-left"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                /> </> :
                <button className="btn btn-cart"><i className="fa-solid fa-cart-plus me-3"></i> {t.cart}</button>}
              <button className="btn btn-wishlist" onClick={() => {
                const message = addWishlistItem(productdetails)
                notify2(message)
              }}>
                <i className="fa-regular fa-heart me-3"></i>
                {t.wish}
              </button>
              <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </div>
          </div>
        </div>
      </div >
      <div className="container product-details">
        <ul className="product-details__list">
          <li className={reviewClassName} onClick={handleReviewClick}>{t.reviews}</li>
          <li className={descriptionClassName} onClick={handleDescriptionClick}>{t.description}</li>
        </ul>
        {showReview ? (<div className="row">
          <div className="col-12 col-md-7">
            <div className="review-item">
              <div className="review-item__head">
                <div className="review-item__author">
                  <img src="https://beshop-demo.vercel.app/assets/img/comment-author1.jpg" alt="" />
                  <span className="review-item__name">Melissa Jones</span>
                  <span className="review-item__date">July 23, 2020</span>
                </div>
                <div className="review-item__rating">
                  <ul>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star"></i></li>
                  </ul>
                </div>
              </div>
              <div className="review-item__content">
                {t.rey2}
              </div>
            </div>
            <div className="review-item">
              <div className="review-item__head">
                <div className="review-item__author">
                  <img src="https://beshop-demo.vercel.app/assets/img/comment-author3.jpg" alt="" />
                  <span className="review-item__name">Amanda Clement</span>
                  <span className="review-item__date">June 15, 2020</span>
                </div>
                <div className="review-item__rating">
                  <ul>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star"></i></li>
                  </ul>
                </div>
              </div>
              <div className="review-item__content">
                {t.rey2}
              </div>
            </div>
            <div className="review-item">
              <div className="review-item__head">
                <div className="review-item__author">
                  <img src="https://beshop-demo.vercel.app/assets/img/comment-author2.jpg" alt="" />
                  <span className="review-item__name">Steve Gentley</span>
                  <span className="review-item__date">July 05, 2020</span>
                </div>
                <div className="review-item__rating">
                  <ul>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star"></i></li>
                  </ul>
                </div>
              </div>
              <div className="review-item__content">
                {t.rey2}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="product-details__form">
              <div className="form-img">
                <img src="https://beshop-demo.vercel.app/assets/img/subscribe-img.png" alt="" />
              </div>
              <form>
                <h4>{t.review}</h4>
                <p>{t.publish}</p>
                <div className="rating">
                  < Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue: any) => {
                      setValue(newValue);
                    }}
                  />
                </div>
                <input type="text" className="form-control" placeholder={t.name} />
                <input type="text" className="form-control" placeholder={t.email} />
                <textarea name="" id="" className="form-control" placeholder={t.enterreview}></textarea>
                <button className="btn" type="submit">{t.send}</button>
              </form>
            </div>
          </div>
        </div>) :
          (<div className="description">
            <h2>{t.prodesc}</h2>
            <p>{language === "EN" ? productdetails.description : productdetails.descAz}</p>
          </div>)}
      </div>
    </section >
  )
};

export default ShopDetails;
