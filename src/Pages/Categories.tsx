import React, { useEffect, useContext } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import Slider from "react-slick";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/homelang";

type LanguageKey = keyof typeof translations;

const Categories: React.FC = () => {

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
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <section className='categories'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Categories</title>
            </Helmet>
            <div className="section-block">
                <div className="section-content">
                    <h1 className='animate__tada animate__animated'>{t.categories}</h1>
                    <ul className="section-content__ul">
                        <li className="section-content__item">
                            <LinkContainer to={"/"}>
                                <a href="/" className="me-5">
                                    {t.home}
                                </a>
                            </LinkContainer>
                            <i className="fa-solid fa-arrow-right"></i>
                        </li>
                        <li className="section-content__item">{t.categories}</li>
                    </ul>
                </div>
            </div>
            <div className="all-categories">
                <div className="categories-items">
                    <div className="container-fluid">
                        <div className="row g-4">
                            <div className="col-12 col-md-6 col-lg-4" data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1000">
                                <div className="categories-item">
                                    <LinkContainer to={"/categories"} >
                                        <img src="https://beshop-demo.vercel.app/assets/img/top-categories-img4.jpg" className='img-fluid' alt="" />
                                    </LinkContainer>
                                    <div className="categories-item__hover">
                                        <LinkContainer to={"/categories"}>
                                            <h5>{t.category1}</h5>
                                        </LinkContainer>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4" data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1000">
                                <div className="categories-item">
                                    <LinkContainer to={"/categories"} >
                                        <img src="https://beshop-demo.vercel.app/assets/img/top-categories-img3.jpg" className='img-fluid' alt="" />
                                    </LinkContainer>
                                    <div className="categories-item__hover">
                                        <LinkContainer to={"/categories"}>
                                            <h5>
                                                {t.category2}
                                            </h5>
                                        </LinkContainer>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4" data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1000">
                                <div className="categories-item">
                                    <LinkContainer to={"/categories"}>
                                        <img src="https://beshop-demo.vercel.app/assets/img/top-categories-img2.jpg" className='img-fluid' alt="" />
                                    </LinkContainer>
                                    <div className="categories-item__hover">
                                        <LinkContainer to={"/categories"}>
                                            <h5>{t.category5}</h5>
                                        </LinkContainer>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4" data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1000">
                                <div className="categories-item">
                                    <LinkContainer to={"/categories"} >
                                        <img src="https://beshop-demo.vercel.app/assets/img/top-categories-img5.jpg" className='img-fluid' alt="" />
                                    </LinkContainer>
                                    <div className="categories-item__hover">
                                        <LinkContainer to={"/categories"}>
                                            <h5>{t.category3}</h5>
                                        </LinkContainer>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4" data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1000">
                                <div className="categories-item">
                                    <LinkContainer to={"/categories"} >
                                        <img src="https://beshop-demo.vercel.app/assets/img/top-categories-img6.jpg" className='img-fluid' alt="" />
                                    </LinkContainer>
                                    <div className="categories-item__hover">
                                        <LinkContainer to={"/categories"}>
                                            <h5>{t.category4}</h5>
                                        </LinkContainer>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4" data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1000">
                                <div className="categories-item">
                                    <LinkContainer to={"/categories"}>
                                        <img src='https://cdn.shopify.com/s/files/1/0338/3882/5612/files/amazing-base-purepressed-setting-powders-jane-iredale_480x480.jpg?v=1633019559' className='img-fluid' alt="" />
                                    </LinkContainer>
                                    <div className="categories-item__hover">
                                        <LinkContainer to={"/categories"}>
                                            <h5>{t.category6}</h5>
                                        </LinkContainer>
                                    </div>
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
    )
}

export default Categories
