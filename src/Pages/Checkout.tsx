import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { LinkContainer } from "react-router-bootstrap";
import Slider from "react-slick";
import { useCart } from "react-use-cart";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/homelang";

type LanguageKey = keyof typeof translations;

const Checkout: React.FC = () => {

  const { language } = useContext(LanguageContext);
  const t = translations[language as LanguageKey];

  const { items, isEmpty, cartTotal, emptyCart } = useCart()
  const [orderPlaced, setorderPlaced] = useState(false);

  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="checkout">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Checkout</title>
      </Helmet>
      <div className="section-block">
        <div className="section-content">
          <h1 className="animate__swing animate__animated">{t.checkout}</h1>
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
            <li className="section-content__item">{t.checkout}</li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="row g-5">
          <div className="col-12 col-md-4 contact-block__item">
            <div className="contact-block__icon">
              <img
                src="https://www.nicepng.com/png/detail/44-448801_checklist-todo-comments-check-list-png-icon.png"
                alt=""
              />
            </div>
            <div className="contact-block__info">
              <h6>{t.step} 1</h6>
              {t.details}
            </div>
          </div>
          <div className="col-12 col-md-4 contact-block__item">
            <div className="contact-block__icon">
              <img
                src="https://www.citypng.com/public/uploads/small/21635327061xg2nb4bywdconv5ijpkogohupiugupnlrz0ocjbsmsbcpbqfgx8uolgh0b0xdgyypxc2cwxdftavsgjsegew5zz7rbisjmek3d32.png"
                alt=""
              />
            </div>
            <div className="contact-block__info">
              <h6>{t.step} 2</h6>
              {t.payment}
            </div>
          </div>
          <div className="col-12 col-md-4 contact-block__item">
            <div className="contact-block__icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4236/4236711.png"
                alt=""
              />
            </div>
            <div className="contact-block__info">
              <h6>{t.step} 3</h6>
              {t.finish}
            </div>
          </div>
        </div>
      </div>
      {orderPlaced ? <div className="checkout-block">
        <div className="checkout-l">
          <div className="container-fluid">
            <div className="row g-5">
              <div className="col-12 col-lg-6 checkout-form">
                <div className="checkout-form__item">
                  <h4>{t.beshop}</h4>
                  <ul className="checkout-list">
                    <li>{t.ordern}<span>B-125724_75</span></li>
                    <li>{t.orders}<span>{t.awaiting}</span></li>
                    <li>{t.reserved}<span>08.06.2023</span></li>
                    <li>{t.expected} <span>08.06.2023</span></li>
                  </ul>
                </div>
              </div>

              <div className="col-12 col-lg-6 checkout-info">
                <h5>{t.your_or}</h5>
                <div className="cart-total">
                  <div className="cart-total__part">
                    {t.goods} <span>$ 0.00</span>
                  </div>
                  <div className="cart-total__part">
                    {t.promo} <span>{t.no}</span>
                  </div>
                  <div className="cart-total__part">
                    {t.deliver} <span className="cart-total__date">(Aug 28,2022 at 11:30)</span> <span>$30</span>
                  </div>
                  <div className="cart-total__num">
                    {t.total}: <span>$ 30.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> :
        <div className="checkout-block">
          <div className="checkout-l">
            <div className="container-fluid">
              <div className="row g-5">
                <div className="col-12 col-lg-6 checkout-form">
                  <form>
                    <div className="checkout-form__item">
                      <h4>{t.info}</h4>
                      <input type="text" placeholder={t.name} className="form-control" />
                      <input type="text" placeholder={t.lastname} className="form-control" />
                      <div className="row">
                        <div className="col-12 col-md-6"><input type="tel" name="" placeholder={t.phone} className="form-control" id="" /></div>
                        <div className="col-12 col-md-6"><input type="email" name="" id="" placeholder={t.email} className="form-control" /></div>
                      </div>
                    </div>
                    <div className="checkout-form__item">
                      <h4>{t.delivery}</h4>
                      <select name="" id="" >
                        <option value="country">{t.country}</option>
                        <option value="country">Country 1</option>
                        <option value="country">Country 2</option>
                      </select>
                      <div className="row">
                        <div className="col-12 col-md-6"><input type="text" name="" placeholder={t.city} className="form-control" id="" /></div>
                        <div className="col-12 col-md-6"><input type="text" name="" id="" placeholder={t.address} className="form-control" /></div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-md-6"><input type="text" name="" placeholder={t.day} className="form-control" id="" /></div>
                        <div className="col-12 col-md-6"><input type="text" name="" id="" placeholder={t.time} className="form-control" /></div>
                      </div>
                    </div>
                    <div className="checkout-form__item">
                      <h4>{t.note}</h4>
                      <textarea name="" id="" placeholder={t.order}></textarea>
                      <label>
                        <input type="checkbox" name="" id="" className="me-3" />{t.create}
                      </label>
                    </div>
                    <button className="btn" onClick={() => {
                      setorderPlaced(true)
                      window.scrollTo(0, 0)
                      emptyCart()
                    }}>Place order <i className=" ms-2 fa-solid fa-angle-right"></i></button>
                  </form>
                </div>
                {isEmpty ?
                  <div className="col-12 col-lg-6 checkout-info">
                    <h5>{t.your_or}</h5>
                    <div className="cart-total">
                      <div className="cart-total__part">
                        {t.goods} <span>$ 0.00</span>
                      </div>
                      <div className="cart-total__part">
                        {t.promo} <span>{t.no}</span>
                      </div>
                      <div className="cart-total__part">
                        {t.deliver} <span className="cart-total__date">(Aug 28,2022 at 11:30)</span> <span>$30</span>
                      </div>
                      <div className="cart-total__num">
                        {t.total}: <span>$ 30.00</span>
                      </div>
                    </div>
                  </div> :
                  (<div className="col-12 col-md-6 checkout-info">
                    <div className="checkout-order">
                      <h5>{t.your_or}</h5>
                      {items.map((item: any, i: any) => {
                        return <div className="checkout-order__item" key={i}>
                          <div className="checkout-order__img">
                            <img
                              className="me-2"
                              src={item.img}
                              alt=""
                            />{" "}
                          </div>
                          <div className="checkout-order__info">
                            <span className="chechkout-order__title">{item.title}</span>
                            <span className="chechkout-order__price">${item.price}</span>
                          </div>
                        </div>
                      })}
                    </div>
                    <div className="cart-total">
                      <div className="cart-total__part">
                        {t.goods} <span>{cartTotal}</span>
                      </div>
                      <div className="cart-total__part">
                        {t.promo} <span>{t.no}</span>
                      </div>
                      <div className="cart-total__part">
                        {t.deliver} <span className="cart-total__date">(Aug 28,2022 at 11:30)</span> <span>$30</span>
                      </div>
                      <div className="cart-total__num">
                        {t.total}: <span>${cartTotal + 30}</span>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>}
      <div className="instagram">
        <div>
          <Slider {...settings}>
            <div className="insta-photo">
              <img
                src="	https://beshop-demo.vercel.app/assets/img/insta-photo1.jpg"
                alt=""
              />
              <div className="insta-photo__hover">
                <i className="fa-brands fa-instagram text-white"></i>
              </div>
            </div>
            <div className="insta-photo">
              <img
                src="	https://beshop-demo.vercel.app/assets/img/insta-photo2.jpg"
                alt=""
              />
              <div className="insta-photo__hover">
                <i className="fa-brands fa-instagram text-white"></i>
              </div>
            </div>
            <div className="insta-photo">
              <img
                src="	https://beshop-demo.vercel.app/assets/img/insta-photo3.jpg"
                alt=""
              />
              <div className="insta-photo__hover">
                <i className="fa-brands fa-instagram text-white"></i>
              </div>
            </div>
            <div className="insta-photo">
              <img
                src="	https://beshop-demo.vercel.app/assets/img/insta-photo4.jpg"
                alt=""
              />
              <div className="insta-photo__hover">
                <i className="fa-brands fa-instagram text-white"></i>
              </div>
            </div>
            <div className="insta-photo">
              <img
                src="	https://beshop-demo.vercel.app/assets/img/insta-photo5.jpg"
                alt=""
              />
              <div className="insta-photo__hover">
                <i className="fa-brands fa-instagram text-white"></i>
              </div>
            </div>
            <div className="insta-photo">
              <img
                src="	https://beshop-demo.vercel.app/assets/img/insta-photo6.jpg"
                alt=""
              />
              <div className="insta-photo__hover">
                <i className="fa-brands fa-instagram text-white"></i>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
