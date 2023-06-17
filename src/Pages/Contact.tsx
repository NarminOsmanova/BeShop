import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { LinkContainer } from "react-router-bootstrap";
import Slider from "react-slick";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/homelang";

type LanguageKey = keyof typeof translations;

const Contact: React.FC = () => {

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
    <section className="contact">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
      </Helmet>
      <div className="section-block">
        <div className="section-content">
          <h1 className="animate__bounceInRight  animate__animated">{t.contact}</h1>
          <ul className="section-content__ul">
            <li className="section-content__item">
              <LinkContainer to={"/"}>
                <a href="/" className="me-5">
                  {t.home}
                </a>
              </LinkContainer>
              <i className="fa-solid fa-arrow-right"></i>
            </li>
            <li className="section-content__item">{t.contact}</li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="row g-5">
          <div className="col-12 col-md-4 contact-block__item">
            <div className="contact-block__icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3425/3425077.png"
                alt=""
              />
            </div>
            <div className="contact-block__info">
              27 Division St, New York, NY 10002, USA
            </div>
          </div>
          <div className="col-12 col-md-4 contact-block__item">
            <div className="contact-block__icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2571/2571195.png"
                alt=""
              />
            </div>
            <div className="contact-block__info">
              +1 345 99 71 345 info@beshop.com
            </div>
          </div>
          <div className="col-12 col-md-4 contact-block__item">
            <div className="contact-block__icon">
              <img
                src="https://cdn4.iconfinder.com/data/icons/sports-outline-24-px/24/Clock_stopwatch_timer_watch_sports-256.png"
                alt=""
              />
            </div>
            <div className="contact-block__info">
              Mon - Fri: 9 am - 6 pm <p>{t.holiday}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-info">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-8 contact-info__text">
              <h4>{t.care}</h4>
              <p>
                {t.questions}
              </p>
            </div>
            <div className="col-sm-12 col-md-3 contact-info__social">
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
          </div>
        </div>
      </div>
      <div className="main-logos">
        <div className="container-fluid">
          <div className="row d-flex justify-content-sm-center">
            <div className="col-12 col-sm-6 col-lg-2">
              <a href="/">
                <img
                  src="https://beshop-demo.vercel.app/assets/img/main-logo1.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="col-12 col-sm-4 col-lg-2">
              <a href="/">
                <img
                  src="https://beshop-demo.vercel.app/assets/img/main-logo2.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="col-12 col-sm-4 col-lg-2">
              <a href="/">
                <img
                  src="https://beshop-demo.vercel.app/assets/img/main-logo3.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="col-12 col-sm-4 col-lg-2 responsive-col">
              <a href="/">
                <img
                  src="https://beshop-demo.vercel.app/assets/img/main-logo4.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="col-12 col-sm-4 col-lg-2">
              <a href="/">
                <img
                  src="https://beshop-demo.vercel.app/assets/img/main-logo5.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="message">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6"></div>
            <div className="col-12 col-md-6 message-info">
              <span>{t.write}</span>
              <span className="main-text">{t.leave}</span>
              <p>
                {t.solution}
              </p>
              <form action="GET">
                <input
                  type="text"
                  className="form-control"
                  placeholder={t.name}
                />
                <input
                  type="email"
                  name=""
                  id=""
                  className="form-control"
                  placeholder={t.email}
                />
                <textarea
                  name=""
                  className="form-control"
                  placeholder={t.message}
                  id=""
                ></textarea>
                <button type="submit" className="btn">
                  {t.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57974.74837730264!2d90.409273!3d24.746724!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564f08e1564b13%3A0xdf7da0a35592c079!2sChorpara%20Bus%20Stop!5e0!3m2!1sen!2sbd!4v1681201356216!5m2!1sen!2sbd"
          width="600"
          height="450"
          title="map"
          data-allowfullscreen=""
          loading="lazy"
          data-referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
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

export default Contact;
