import React, { useContext, useState } from "react";
import { animated, useSpring } from "react-spring";
import Slider from "react-slick";
import { LinkContainer } from "react-router-bootstrap";
import { Helmet } from "react-helmet";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/homelang";

type LanguageKey = keyof typeof translations;

// reqemlerin avtomatik artmasi ucun
function Number({ n }: { n: number }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 3000,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n: number) => n.toFixed(0))}</animated.div>;
}
type iconType = {
  value: any;
}
const Icon: React.FC<iconType> = (props) => {
  return (
    <span>
      <i
        className={
          props.value >= 1
            ? "fa-solid fa-star text-warning"
            : props.value >= 0.5
              ? "fa-solid fa-star-half-stroke text-warning"
              : "fa-regular fa-star text-warning"
        }
      ></i>
      <i
        className={
          props.value >= 2
            ? "fa-solid fa-star text-warning"
            : props.value >= 1.5
              ? "fa-solid fa-star-half-stroke text-warning"
              : "fa-regular fa-star text-warning"
        }
      ></i>
      <i
        className={
          props.value >= 3
            ? "fa-solid fa-star text-warning"
            : props.value >= 2.5
              ? "fa-solid fa-star-half-stroke text-warning"
              : "fa-regular fa-star text-warning"
        }
      ></i>
      <i
        className={
          props.value >= 4
            ? "fa-solid fa-star text-warning"
            : props.value >= 3.5
              ? "fa-solid fa-star-half-stroke text-warning"
              : "fa-regular fa-star text-warning"
        }
      ></i>
      <i
        className={
          props.value >= 5
            ? "fa-solid fa-star text-warning"
            : props.value >= 4.5
              ? "fa-solid fa-star-half-stroke text-warning"
              : "fa-regular fa-star text-warning"
        }
      ></i>
    </span>
  );
}
const About: React.FC = () => {

  const { language } = useContext(LanguageContext);
  const t = translations[language as LanguageKey];

  // testimonial slider ucun
  const [rating, setRating] = useState(Math.floor(Math.random() * 5) + 1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonialData = [
    {
      name: "Alexander Ball",
      city: "New York",
      content: t.rey1
    },
    {
      name: "Izabel Watt",
      city: "Michigan",
      content: t.rey2
    },
    {
      name: "Rachel Regan",
      city: "Sydney",
      content: t.rey1
    },
    {
      name: "Malika Kenny",
      city: "Ha Noi",
      content: t.rey2
    },
    {
      name: "Javier Bender",
      city: "Tokyo",
      content: t.rey1
    },
    {
      name: "Paul Brookes",
      city: "Berlin",
      content: t.rey2
    },
    {
      name: "Bilaal Gunn",
      city: "Denver",
      content: t.rey1
    },
    {
      name: "Musab O'Sullivan",
      city: "Paris",
      content: t.rey2
    },
  ]

  const prevButtonHandler = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 8) % 8);
    const randomRating = Math.floor(Math.random() * 5) + 1;
    setRating(randomRating);
  };

  const nextButtonHandler = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 8);
    const randomRating = Math.floor(Math.random() * 5) + 1;
    setRating(randomRating);
  };

  // video acmaq ucun

  function handleButtonClick() {
    var youtubeVideoUrl = "https://www.youtube.com/embed/K1yp7Q1hH1c";

    // Yeni bir sehifede YouTube videosunu açın
    window.open(youtubeVideoUrl, "_blank");
  }

  // instagram slider ucun
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
    <section className="about">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
      </Helmet>
      <div className="section-block">
        <div className="section-content">
          <h1 className="animate__fadeInDown animate__animated">{t.about}</h1>
          <ul className="section-content__ul">
            <li className="section-content__item">
              <LinkContainer to={"/"}>
                <a href="/" className="me-5">
                  {t.home}
                </a>
              </LinkContainer>
              <i className="fa-solid fa-arrow-right"></i>
            </li>
            <li className="section-content__item">{t.about}</li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 about-block__item">
            <div className="about-block__icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/7615/7615749.png"
                alt=""
              />
            </div>
            <div className="about-block__info">
              <h6>{t.free}</h6> {t.world}
            </div>
          </div>
          <div className="col-12 col-md-4 about-block__item">
            <div className="about-block__icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1989/1989877.png"
                alt=""
              />
            </div>
            <div className="about-block__info">
              <h6>{t.helpline}</h6> +1 345 99 71 345
            </div>
          </div>
          <div className="col-12 col-md-4 about-block__item">
            <div className="about-block__icon">
              <img
                src="https://backend.avromed.az/storage/about-companies/January2019/3cwuflmNcqB2lLwnPj7g.svg"
                alt=""
              />
            </div>
            <div className="about-block__info">
              <h6>{t.customer}</h6>
              {t.finish}
            </div>
          </div>
        </div>
      </div>
      <div className="promo-video">
        <div className="promo-video__text">
          <span>{t.promotion}</span>
          <h2>{t.welcome}</h2>
          <p>
            {t.today}
          </p>
        </div>
        <div className="promo-video__block">
          <div className="promo-video__overlay">
            <span>{t.promotion}</span>
            <div
              className="promo-video__play"
            >
              <img
                src="https://beshop-demo.vercel.app/assets/img/play-btn.png"
                onClick={handleButtonClick}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="promo-video__numbers">
          <div className="container">
            <div className="row g-5">
              <div className="col-12 col-md-3 promo-video__number">
                <span>
                  <Number n={2300} />
                </span>
                <h5>{t.product}</h5>
              </div>
              <div className="col-12 col-md-3 promo-video__number">
                <span>
                  <Number n={108} />
                </span>
                <h5>{t.brands}</h5>
              </div>
              <div className="col-12 col-md-3 promo-video__number">
                <span>
                  <Number n={32} />
                </span>
                <h5>{t.partners}</h5>
              </div>
              <div className="col-12 col-md-3 promo-video__number">
                <span>
                  <Number n={618} />
                </span>
                <h5>{t.customers}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="story">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6"></div>
            <div className="col-12 col-md-6 story-info">
              <span>{t.success}</span>
              <h2>{t.develops}</h2>
              <p className="story-info__paraqraf">
                {t.network}
              </p>
              <p>
                {t.forming}
              </p>
              <button type="submit" className="btn">
                {t.send}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="advantages">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="advantages-item">
                <div className="advantages-item__icon">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4337/4337695.png"
                    alt=""
                  />
                </div>
                <h4>{t.natural}</h4>
                <p>
                  {t.formula}
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="advantages-item">
                <div className="advantages-item__icon">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/6798/6798764.png"
                    alt=""
                  />
                </div>
                <h4>{t.quality}</h4>
                <p>
                  {t.vision}
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="advantages-item">
                <div className="advantages-item__icon">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2544/2544374.png"
                    alt=""
                  />
                </div>
                <h4>{t.natural}</h4>
                <p>
                  {t.formula}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial">
        <div className="container">
          <div className="testimonial-title">
            <h5>{t.testimonial}</h5>
            <h2>{t.what}</h2>
          </div>
        </div>
        <div className="slider-container mt-5 pt-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-12 col-lg-6">
                <div className="slider-images d-flex flex-column flex-md-row">
                  <div className="d-flex">
                    <img src="https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/testimonial/TestimonialOne/1.png" alt="Person 1" className={currentIndex === 0 ? 'active' : ''} />
                    <img src="https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/testimonial/TestimonialOne/2.png" alt="Person 2" className={currentIndex === 1 ? 'active' : ''} />
                  </div>
                  <div className="d-flex">
                    <img src="https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/testimonial/TestimonialOne/3.png" alt="Person 3" className={currentIndex === 2 ? 'active' : ''} />
                    <img src="https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/testimonial/TestimonialOne/4.png" alt="Person 3" className={currentIndex === 3 ? 'active' : ''} />
                  </div>
                </div>
                <div className="slider-images d-flex flex-column flex-md-row">
                  <div className="d-flex">
                    <img src="https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/testimonial/TestimonialOne/5.png" alt="Person 4" className={currentIndex === 4 ? 'active' : ''} />
                    <img src="https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/testimonial/TestimonialOne/6.png" alt="Person 5" className={currentIndex === 5 ? 'active' : ''} />
                  </div>
                  <div className="d-flex">
                    <img src="https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/testimonial/TestimonialOne/7.png" alt="Person 6" className={currentIndex === 6 ? 'active' : ''} />
                    <img src="https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/testimonial/TestimonialOne/8.png" alt="Person 6" className={currentIndex === 7 ? 'active' : ''} />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="slider-details">
                  <div className="person-info">
                    <div className="slider-icon">
                      <i className="fa-solid fa-quote-right"></i>
                    </div>
                    <div className="person-info__title">
                      <h3 className="person-name">{testimonialData[currentIndex].name} </h3>
                      <h5>{testimonialData[currentIndex].city}</h5>
                    </div>
                    <p className="person-rating"><Icon value={rating} /> </p>
                  </div>
                  <p className="person-info__content">
                    {testimonialData[currentIndex].content}
                  </p>
                  <div className="slider-buttons">
                    <button className="prev-button" onClick={prevButtonHandler}>
                      <i className="fa-solid fa-angle-left"></i>
                    </button>
                    <button className="next-button" onClick={nextButtonHandler}>
                      <i className="fa-solid fa-angle-right"></i>
                    </button>
                  </div>
                </div>
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

export default About;
