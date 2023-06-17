import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { LinkContainer } from "react-router-bootstrap";
import Slider from "react-slick";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/homelang";

type LanguageKey = keyof typeof translations;

const Registration: React.FC = () => {

  const { language } = useContext(LanguageContext);
  const t = translations[language as LanguageKey];

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
    <section className="registration">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Registration</title>
      </Helmet>
      <div className="section-block">
        <div className="container">
          <div className="section-content">
            <h1 className="animate__flipInX animate__animated">{t.registration}</h1>
            <ul className="section-content__ul">
              <li className="section-content__item">
                <LinkContainer to={"/"}>
                  <a href="/" className="me-5">
                    {t.home}
                  </a>
                </LinkContainer>
                <i className="fa-solid fa-arrow-right"></i>
              </li>
              <li className="section-content__item">{t.registration}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="registration-block">
        <div className="registration-l">
          <div className="container">
            <div className="login-form__container">
              <div className="login-form">
                <form>
                  <h3>{t.register}</h3>
                  <ul className="login-form__social">
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
                        <i className="fa-brands fa-google-plus-g"></i>
                      </a>
                    </li>
                  </ul>
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder={t.name}
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder={t.lastname}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder={t.phone}
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder={t.email}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <span>password</span>
                    <div className="col-12 col-md-6">
                      <input
                        type="password"
                        className="form-control"
                        placeholder={t.password}
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <input
                        type="password"
                        className="form-control"
                        placeholder={t.confirm}
                      />
                    </div>
                  </div>
                  <label>
                    <input type="checkbox" name="" id="" />
                    {t.remember}
                  </label>
                  <button type="submit" className="btn">
                    {t.registration}
                  </button>
                  <div className="login-form__bottom">
                    <span>
                      {t.already}
                      <LinkContainer to={"/login"}>
                        <a href="/login">{t.login}</a>
                      </LinkContainer>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="subscribe">
        <div className="wrapper">
          <div className="subscribe-form">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6 order-2 order-md-1">
                  <div className="subscribe-form__img">
                    <img
                      src="https://beshop-demo.vercel.app/assets/img/subscribe-img.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 form">
                  <form>
                    <h3>{t.stay}</h3>
                    <p>{t.nourish}</p>
                    <div className="box-field__row">
                      <div className="box-field">
                        <input
                          type="email"
                          placeholder={t.email}
                          className="form-control"
                        />
                      </div>
                      <button type="submit" className="btn btn-dark">
                        {t.subscribe}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default Registration;
