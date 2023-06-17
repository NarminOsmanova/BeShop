import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { LinkContainer } from "react-router-bootstrap";
import Slider from "react-slick";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/homelang";

type LanguageKey = keyof typeof translations;

const Faq: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language as LanguageKey];

  // instagram slideri ucun
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

  // accordion ucun data
  const accordionItems = [
    {
      title: t.how,
      content: t.almost
    },
    {
      title: t.label,
      content: t.learning,
    },
    {
      title: t.treatments,
      content: t.procedure,
    },
    {
      title: t.animal,
      content: t.fats,
    },
    {
      title: t.foundation,
      content: t.probably,
    },
    {
      title: t.proper,
      content: t.start,
    },
    {
      title: t.beauty,
      content: t.cleanser,
    },
    {
      title: t.pharmacy,
      content: t.professional,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(-1);

  function handleClick(index: any) {
    if (index === activeIndex) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  }
  return (
    <section className="faq">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Faq</title>
      </Helmet>
      <div className="section-block">
        <div className="section-content">
          <h1 className="animate__heartBeat animate__animated animate__bounce">FAQ</h1>
          <ul className="section-content__ul">
            <li className="section-content__item">
              <LinkContainer to={"/"}>
                <a href="/" className="me-5">
                  {t.home}
                </a>
              </LinkContainer>
              <i className="fa-solid fa-arrow-right"></i>
            </li>
            <li className="section-content__item">FAQ</li>
          </ul>
        </div>
      </div>
      <div className="container mt-5">
        <div className="faq-items">
          {accordionItems.map((item, index) => (
            <div className="faq-item" key={index}>
              <div
                className="faq-item__title"
                onClick={() => handleClick(index)}
              >
                <span className="faq-item__num">{index + 1}</span>
                {item.title}
                <span className="faq-item__btn">
                  {index === activeIndex ? "-" : "+"}
                </span>
              </div>
              {index === activeIndex && (
                <div className="faq-item__content">
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          ))}
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

export default Faq;
