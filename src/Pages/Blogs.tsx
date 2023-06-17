import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import SingleCard2 from "../Components/SingleCard2";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import { Helmet } from "react-helmet";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/homelang";

type LanguageKey = keyof typeof translations;

interface propType {
  pvalue: any
}
export const Ablog = () => {

  const { language } = useContext(LanguageContext);
  const t = translations[language as LanguageKey];

  return <div className="section-block">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Blog</title>
    </Helmet>
    <div className="section-content">
      <h1 className="animate__rotateInDownLeft animate__animated">BLOG</h1>
      <ul className="section-content__ul">
        <li className="section-content__item">
          <LinkContainer to={"/"}>
            <a href="/" className="me-5">
              {t.home}
            </a>
          </LinkContainer>
          <i className="fa-solid fa-arrow-right"></i>
        </li>
        <li className="section-content__item">Blog</li>
      </ul>
    </div>
  </div>
}
export const Bblog = () => {
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
    <>
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
    </>
  )
}

const Blogs: React.FC<propType> = ({ pvalue }) => {

  const location = useLocation();
  return (
    <>
      {location.pathname === "/blog" && <Ablog />}
      <section className="blog-container">
        <Container className="blog">
          <Row className="g-5">
            {pvalue.map((item: any, i: number) => {
              return (
                <SingleCard2
                  id={item.id}
                  key={i}
                  ptitle={item.title}
                  pdesc={item.desc}
                  pphoto={item.photo}
                  pdate={item.date}
                />
              );
            })}
          </Row>
        </Container>
      </section>
      {location.pathname === "/blog" && <Bblog />}
    </>
  );
};

const mapStatetoProps = (state: string) => {
  return {
    pvalue: state,
  };
};

export default connect(mapStatetoProps)(Blogs);
