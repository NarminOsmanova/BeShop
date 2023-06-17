import React, { useContext, useState } from "react";
import Slider from "react-slick";
import user from "../data/users";
import { LinkContainer } from "react-router-bootstrap";
import { Helmet } from "react-helmet";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/homelang";
import { useNavigate } from "react-router-dom";

type LanguageKey = keyof typeof translations;

const Login: React.FC = () => {

  const { language } = useContext(LanguageContext);
  const t = translations[language as LanguageKey];

  const [nickname, setNickname] = useState();
  const [password, setPassword] = useState();
  const [alertText, setAlertText] = useState("");
  const [icon, setIcon] = useState("fa-solid fa-eye");
  const [type, setType] = useState("password");

  const navigate = useNavigate();

  const eye = () => {
    if (icon === "fa-solid fa-eye") {
      setIcon("fa-solid fa-eye-slash");
      setType("text");
    } else {
      setIcon("fa-solid fa-eye");
      setType("password");
    }
  };

  const loginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nickname || !password) {
      alert("please, fill the gap");
    } else {
      for (let x in user) {
        if (nickname === user[x].nickname && password === user[x].password) {
          localStorage.setItem("user", user[x].nickname);
          setAlertText("");
          window.scrollTo(0, 0)
          navigate("/shop/checkout");
          return;
        } else {
          setAlertText("Nickname or password is wrong");
        }
      }
    }
  };

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
        <title>Login</title>
      </Helmet>
      <div className="section-block">
        <div className="container">
          <div className="section-content">
            <h1 className="animate__flipInY animate__animated">{t.login}</h1>
            <ul className="section-content__ul">
              <li className="section-content__item">
                <LinkContainer to={"/"}>
                  <a href="/" className="me-5">
                    {t.home}
                  </a>
                </LinkContainer>
                <i className="fa-solid fa-arrow-right"></i>
              </li>
              <li className="section-content__item">{t.login}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="registration-block login">
        <div className="registration-l">
          <div className="container">
            <div className="login-form__container">
              <div className="login-form">
                <form onSubmit={loginSubmit}>
                  <h3>{t.loginwith}</h3>
                  <p className={`animate__animated text-center text-danger ${alertText ? 'animate__zoomIn' : ''}`}>{alertText}</p>
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
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder={t.nickname}
                        onChange={(e: any) => {
                          setNickname(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-10">
                      <div className="input-group position-relative mb-3">
                        <input
                          type={type}
                          className="form-control"
                          placeholder={t.password}
                          onChange={(e: any) => {
                            setPassword(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-2">
                      <span
                        className="input-group-text"
                        id="basic-addon2"
                        onClick={eye}
                      >
                        <i className={icon}></i>
                      </span>
                    </div>
                  </div>
                  <label>
                    <input type="checkbox" name="" id="" />
                    {t.remember}
                  </label>
                  <button type="submit" className="btn">
                    {t.login}
                  </button>
                  <div className="login-form__bottom">
                    <span>
                      {t.account}
                      <LinkContainer to={"/registration"}>
                        <a href="/registration" className="me-5">
                          {t.register}
                        </a>
                      </LinkContainer>
                      <a href="/" className="ms-5">
                        {t.lost}
                      </a>
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
    </section >
  );
};

export default Login;
