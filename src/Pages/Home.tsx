import React, { useState, useContext } from "react";
import { Card, Container } from "react-bootstrap";
import Slider from "react-slick";
import { ProductContext } from "../context/ProductContext";
import products from "../data/product";
import { LinkContainer } from "react-router-bootstrap";
import Blogs from "./Blogs";
import { Helmet } from "react-helmet";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/homelang";

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

type LanguageKey = keyof typeof translations;

const Home: React.FC = () => {

  const { language } = useContext(LanguageContext);
  const t = translations[language as LanguageKey];

  // productlari filterlemek ucun
  const [product, setProduct] = useContext(ProductContext)
  const [activeCategory, setActiveCategory] = useState("");
  const filterData = (comingItem: any) => {
    const result = products.filter((item: any) => {
      return item.category === comingItem
    });
    setProduct(result);
    setActiveCategory(comingItem);
  };

  // product slideri ucun
  var setting = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

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

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <div className="home">
        <div className="home-block">
          <Container>
            <div className="home-block__text">
              <div className="">
                <span className="different-text">{t.different}</span>
                <h1 className="main-text">{t.main}</h1>
                <p>
                  {t.p}
                </p>
                <a href="/shop" className="btn">
                  {t.a}
                </a>
              </div>
            </div>
          </Container>
          <div className="home-block_decor">
            <img
              src="https://beshop-demo.vercel.app/assets/img/main-block-decor.png"
              alt=""
            />
          </div>
        </div>
        <div className="trending">
          <div className="trending-content">
            <div className="trending-top">
              <span>{t.cosmetic}</span>
              <h2 className="animate__jackInTheBox animate__bounce  animate__animated">{t.trend}</h2>
              <p>{t.p}</p>
            </div>
            <div className="trending-bottom">
              <ul className="trending-tab__list">
                <li className={activeCategory === "Make Up" ? "active" : ""} onClick={() => { filterData("Make Up") }}>{t.category1}</li>
                <li className={activeCategory === "Perfume" ? "active" : ""} onClick={() => { filterData("Perfume") }}>{t.category2}</li>
                <li className={activeCategory === "Skin" ? "active" : ""} onClick={() => { filterData("Skin") }}>{t.category3}</li>
                <li className={activeCategory === "Hair" ? "active" : ""} onClick={() => { filterData("Hair") }}>{t.category4}</li>
                <li className={activeCategory === "Nails" ? "active" : ""} onClick={() => { filterData("Nails") }}>{t.category5}</li>
                <li className={activeCategory === "Make Up Tools" ? "active" : ""} onClick={() => { filterData("Make Up Tools") }}>{t.category6}</li>
              </ul>
              <div className="products-items">
                <Slider {...setting} >
                  {product.map((item: any) => (
                    <Card className="border-0" key={item.id}>
                      <img src={item.img} alt="" />
                      <Card.Body>
                        <LinkContainer to={`/shop/${item.id}`}>
                          <Card.Title className="text-center">{item.title}</Card.Title>
                        </LinkContainer>
                        <Card.Text className="text-center">
                          ${item.price}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="main-logos">
          <div className="container">
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
        <div className="discount">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 d-none d-md-block"></div>
              <div className="col-12 col-md-6">
                <div className="discount-info">
                  <span>{t.discount}</span>
                  <span className="main-text">
                    {t.get} <span>50%</span> {t.off}
                  </span>
                  <p>
                    {t.p}
                  </p>
                  <a className="btn" href="/shop">
                    {t.a}
                  </a>
                </div>
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
        <div className="categories">
          <div className="categories-top">
            <span>{t.popular}</span>
            <h2>{t.top}</h2>
            <p>{t.p}</p>
          </div>
          <div className="categories-items">
            <div className="container-fluid">
              <div className="row g-4">
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="categories-item">
                    <LinkContainer to={"/categories"} >
                      <img src="https://beshop-demo.vercel.app/assets/img/top-categories-img4.jpg" alt="" />
                    </LinkContainer>
                    <div className="categories-item__hover">
                      <LinkContainer to={"/categories"}>
                        <h5>{t.category1}</h5>
                      </LinkContainer>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="categories-item">
                    <LinkContainer to={"/categories"} >
                      <img src="https://beshop-demo.vercel.app/assets/img/top-categories-img3.jpg" alt="" />
                    </LinkContainer>
                    <div className="categories-item__hover">
                      <LinkContainer to={"/categories"}>
                        <h5>{t.category2}</h5>
                      </LinkContainer>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="categories-item">
                    <LinkContainer to={"/categories"} className="categories-item">
                      <img src="https://beshop-demo.vercel.app/assets/img/top-categories-img2.jpg" alt="" />
                    </LinkContainer>
                    <div className="categories-item__hover">
                      <LinkContainer to={"/categories"}>
                        <h5>{t.category5}</h5>
                      </LinkContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info-blocks">
          <div className="info-blocks__item bg-img1">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div className="info-blocks__item-image"></div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="info-blocks__item-text my-5 my-xl-0">
                    <span>{t.check}</span>
                    <h2>{t.delicate}</h2>
                    <p className="paraqraf">
                      {t.p}
                    </p>
                    <p>
                      {t.sensitive}
                    </p>
                    <a href="/shop" className="btn ">
                      {t.a}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="info-blocks__item bg-img2">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="info-blocks__item-text">
                    <span>{t.about}</span>
                    <h2>{t.who}</h2>
                    <p className="paraqraf">
                      {t.p}
                    </p>
                    <p>
                      {t.forming}
                    </p>
                    <a href="/about" className="info-blocks__item-link">
                      <i className="fa-solid fa-video"></i>
                      {t.watch}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="info-blocks__item-img">
                    <div className="info-blocks__item-img-overlay">
                      <span>{t.promotion}</span>
                      <div
                        className="info-blocks__item-img-play"
                      >
                        <img
                          onClick={handleButtonClick}
                          src="https://beshop-demo.vercel.app/assets/img/play-btn.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
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
        <section className="blogs">
          <div className="home-container text-center">
            <span>{t.blog}</span>
            <h2>{t.news}</h2>
            <p>{t.p}</p>
          </div>
          <Blogs />
          <div className="blog-btn">
            <LinkContainer to={"/blog"}>
              <a href="/blog" className="btn">{t.readblog}</a>
            </LinkContainer>
          </div>
        </section>
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
      </div>
    </>
  );
};

export default Home;
